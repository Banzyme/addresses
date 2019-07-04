import { FullStreetAddressModel } from '../models/full-address.model';
import {ValidateClass} from '../classes/validate.class';
import {ClassifyClass} from '../classes/classify.class';
import {AddressUtility, ApiResponse} from '../classes/address-utility.class';

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
        let validateClass = new ValidateClass();
        let classifyClass = new ClassifyClass();
        let addressUtility= new AddressUtility();
        const errors = addressUtility.checkFormat(address);
        if (errors > 0){
            return ApiResponse.apiResponse500("You have errors in the format of your request. Refer to console log for more details.");
        }
        if (address.doAddressExistCheck.toLowerCase() ==='no' || address.doAddressExistCheck.toLowerCase()===''){
            
            let addressType = classifyClass.classify(address);
            return ApiResponse.apiResponse({
                status: 200,
                message: 'Successful',
                address: AddressUtility.format(address),
                addressType
            })
        }
        else{
            return await validateClass.validateAddress(address)
            .then(response => {
                let addressType;
                if( response.status !== 200 ){
                    addressType = 'Address does not exist!';
                } else{
                    addressType = classifyClass.classify(address);
                }

                return (ApiResponse.apiResponse({
                    ...response,
                    addressType
                }));
            })
            .catch(error => {
               return ApiResponse.apiResponse500(error) 
            })
        }
    }
}