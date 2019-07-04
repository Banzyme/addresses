import { FullStreetAddressModel } from '../models/full-address.model';
import { AbstractValidator } from './abstract-validator.class';
import { GoogleMapsAPIAdapter } from '../adapters/google-maps.adapter';
import { MapsAPIAdapter } from '../adapters/api-adapter.adapter';

export class ValidateClass extends AbstractValidator{
    private mapsAPI: MapsAPIAdapter;

    public classify(address: FullStreetAddressModel) {
        throw new Error("Validate class does not classify");
    }
    /*
    ** STRATEGY PATTERN?: Implement autocomplete, spellchecking algorithms, Make API Call to MapBox if Google Maps can't find address
    */
    async validateAddress (address: FullStreetAddressModel ){
        let addressExist = false;
        const formattedAddress: string = `${address.addressLine1}+${address.complexNo}+${address.complexName}+${address.streetNo}+${address.streetName}+${address.suburb}+${address.city}+${address.province}+${address.zipCode}`
        
        const APIKey: string = ''; // TODO
        
        this.mapsAPI = new GoogleMapsAPIAdapter(APIKey);
        await this.mapsAPI.lookupAddress(formattedAddress)
        .then(response => {
            if(response.status==='OK'){addressExist=true;}
            return addressExist;
        })
        .catch(error => {
            console.log(error);
            //TO-DO: Make another call to MapBox?
            return addressExist;
        });
        return addressExist;
    }
}