import { FullStreetAddressModel } from '../models/full-address.model';
import { AbstractValidator } from './abstract-validator.class';

const  api_helper= require('../adapters/google-maps.repository')
export class ValidateClass extends AbstractValidator{
    public classify(address: FullStreetAddressModel) {
        throw new Error("Validate class does not classify");
    }
    /*
    ** STRATEGY PATTERN?: Implement autocomplete, spellchecking algorithms, Make API Call to MapBox if Google Maps can't find address
    */
    async validateAddress (address: FullStreetAddressModel ){
        let addressExist = false;
        const formattedAddress : String = `${address.addressLine1}+${address.complexNo}+${address.complexName}+${address.streetNo}+${address.streetName}+${address.suburb}+${address.city}+${address.province}+${address.zipCode}`
        
        const APIKey : String= 'AIzaSyBJgs2BCnnLrxtW-7pIyNhPROJc9DUeOYk'
        
       
        await api_helper.lookupAddress(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIKey}`)
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