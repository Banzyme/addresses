import { MapsAPIAdapter } from "./api-adapter.adapter";

const request = require('request')

export class GoogleMapsAPIAdapter extends MapsAPIAdapter{
    startingURL = `https://maps.googleapis.com/maps/api/geocode`;

    constructor(apiKey) {
        super(apiKey);
    }

    lookupAddress(formattedAddress: string) {
        //This method returns a promise which gets resolved or rejected based on the result from the API
        return new Promise((resolve, reject) => {
            const url = this.createURL(formattedAddress);
            request(url, { json: true }, (err, res, body) => {
              if (err) reject(err)
              resolve(body)
            });
        })
    }

    private createURL(formattedAddress: string): string {
        return `${this.startingURL}/json?address=${formattedAddress}&key=${this.apiKey}`;
    }
}

