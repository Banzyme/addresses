import {AbstractHandler} from './abstract-handler.class';
import {FullStreetAddressModel} from '../models/full-address.model';

export class MissingFieldsHandler extends AbstractHandler{
    public handle(address: FullStreetAddressModel, errors : number) : number{
        let missingFields='';
        if(!address.hasOwnProperty('doAddressExistCheck')){
            missingFields+='doAddressExistCheck | ';
        }
        if(!address.hasOwnProperty('addressLine1')){
            missingFields+='addressLine1 | ';
        }
        if(!address.hasOwnProperty('complexNo')){
            missingFields+='complexNo | ';
        }
        if(!address.hasOwnProperty('complexName')){
            missingFields+='complexName | ';
        }
        if(!address.hasOwnProperty('streetNo')){
            missingFields+='streetNo | ';
        }
        if(!address.hasOwnProperty('streetName')){
            missingFields+='streetName | ';
        }
        if(!address.hasOwnProperty('suburb')){
            missingFields+='suburb | ';
        }
        if(!address.hasOwnProperty('city')){
            missingFields+='city | ';
        }
        if(!address.hasOwnProperty('province')){
            missingFields+='province | ';
        }
        if(!address.hasOwnProperty('zipCode')){
            missingFields+='zipCode | ';
        }

        if(missingFields!==''){
            console.log("MISSING FIELDS");
            console.log(`        ${missingFields} field/s missing in your request!
            => Please make sure all required fields are filled in. Fill "" in fields if meant to be blank.
            ------------------------------------------------------------------------------------------------\n`);
            ++errors;
        }
        return super.handle(address,errors);
    }
}