import { FullStreetAddressModel } from "../models/full-address.model";
import {ValidateClass} from "../classes/validate.class";
import {ClassifyClass} from "../classes/classify.class";

/*
** FACADE PATTERN: Use AddressService to hide complexity
*/
export class AddressService{
    static async classifyAddress(address : FullStreetAddressModel){ 
        /*
        ** CHAIN OF RESPONSIBILTY PATTERN: Validate thereafter Classify address request
        */

        //If doesnt exist then return error
        let addressType = "";
        return await ValidateClass.validateAddress(address)
        .then(response => {
            if(  response=== false ){
                addressType = "Address does not exist!";
                return addressType;
            }
            //Address exists then classify address
            else{
                let addressType = ClassifyClass.classify(address);
                return addressType;
            }
        })
        .catch(error => {console.log(error);})
        
    }
}