import { SimpleStreetAddressModel } from "../models/simple-address.model";
import { FullStreetAddressModel } from "../models/full-address.model";

const  api_helper= require('../adaptors/google-maps.repository')
export class ValidateClass{
    static validateAddress (address: FullStreetAddressModel ) : Boolean{
        const formattedAddress : String = `${address.addressLine1}+${address.complexNo}+${address.complexName}+${address.streetNo}+${address.streetName}+${address.suburb}+${address.city}+${address.province}+${address.zipCode}`
        
        const APIKey : String= 'AIzaSyBSFC36Y5iX_G9GeQmGL3jc723blrWJqgU'
        
        api_helper.lookupAddress(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIKey}`)
        .then(response => {
            return response.status==='OK'
        })
        .catch(error => {
            console.log(error);
            return false;
        })

        return false;
    }
}