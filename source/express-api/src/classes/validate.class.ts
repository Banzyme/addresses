import { FullStreetAddressModel } from '../models/full-address.model';

const  api_helper= require('../adapters/google-maps.repository')
export class ValidateClass{
    /*
    ** STRATEGY PATTERN?: Implement autocomplete, spellchecking algorithms, Make API Call to MapBox if Google Maps can't find address
    */
    static async validateAddress (address: FullStreetAddressModel ){
        let addressExist = false;
        const formattedAddress : String = `${address.addressLine1}+${address.complexNo}+${address.complexName}+${address.streetNo}+${address.streetName}+${address.suburb}+${address.city}+${address.province}+${address.zipCode}`
        
        const APIKey : String= ''
        
       
        await api_helper.lookupAddress(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIKey}`)
        .then(response => {
            if(response.status==='OK'){addressExist=true;}
            console.log(response);
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