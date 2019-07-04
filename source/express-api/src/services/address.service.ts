import { FullStreetAddressModel } from '../models/full-address.model';
import {ValidateClass} from '../classes/validate.class';
import {ClassifyClass} from '../classes/classify.class';
import {FormatCheckerClass} from '../classes/formatchecker.class'

/*
** FACADE PATTERN: Use AddressService to hide complexity
*/
export class AddressService{
    private static instance: AddressService;
    private AddressService(){
    }

    /*
    ** SINGLETON PATTERN: Only one instance of AddressService used
    */
    static getInstance(): AddressService {
        if (!AddressService.instance) {
            AddressService.instance = new AddressService();
        }
        return AddressService.instance;
    }

    async classifyAddress(address : FullStreetAddressModel){ 
        let addressType;
        let validateClass = new ValidateClass();
        let classifyClass = new ClassifyClass();
        const errors = FormatCheckerClass.checkFormat(address);
        if (errors > 0){
            return "You have errors in the format of your request. Refer to console log for more details.";
        }
        //if user chooses to not do check to see if address exists
        if (address.doAddressExistCheck.toLowerCase()==='no' || address.doAddressExistCheck.toLowerCase()===''){
            let addressType = classifyClass.classify(address);
            return addressType;
        }
        else{
            //If doesnt exist then return error
            return await validateClass.validateAddress(address)
            .then(response => {
                if(  response=== false ){
                    addressType = 'Address does not exist!';
                    return addressType;
                }
                //Address exists then classify address
                else{
                    let addressType = classifyClass.classify(address);
                    return addressType;
                }
            })
            .catch(error => {console.log(error);})
        }
        
    }
}