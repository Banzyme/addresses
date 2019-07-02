import { FullStreetAddressModel } from '../models/full-address.model';
import {ValidateClass} from '../classes/validate.class';
import {ClassifyClass} from '../classes/classify.class';
import {FormatCheckerClass} from '../classes/formatchecker.class'

/*
** FACADE PATTERN: Use AddressService to hide complexity
*/
export class AddressService{
    static async classifyAddress(address : FullStreetAddressModel){ 
        /*
        ** CHAIN OF RESPONSIBILTY PATTERN: Check format, Validate address exists, thereafter Classify address request
        */
        let addressType;
        const errors = FormatCheckerClass.checkFormat(address);
        if (errors){
            return errors;
        }
        //if user chooses to not do check to see if address exists
        if (address.doAddressExistCheck.toLowerCase()==='no' || address.doAddressExistCheck.toLowerCase()===''){
            let addressType = ClassifyClass.classify(address);
            return addressType;
        }
        else{
            //If doesnt exist then return error
            return await ValidateClass.validateAddress(address)
            .then(response => {
                if(  response=== false ){
                    addressType = 'Address does not exist!';
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
}