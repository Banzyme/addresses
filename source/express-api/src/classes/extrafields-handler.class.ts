import {AbstractHandler} from './abstract-handler.class';
import {FullStreetAddressModel} from '../models/full-address.model';

export class ExtraFieldsHandler extends AbstractHandler{

    public handle(address: FullStreetAddressModel, errors : number) : number{
        let extraFields='';
        for (let key in address) {
            if ( !('doAddressExistCheck|addressLine1|complexNo|complexName|streetNo|streetName|suburb|city|province|zipCode').includes(key)){
                extraFields+=key+' | ';
            }
        }
        if(extraFields!==''){
            console.log("EXTRA FIELDS");
            console.log(`        ${extraFields} field/s are unnecessarily added!
            => Please remove these fields from your request.
            ------------------------------------------------------------------------------------------------\n`);
            ++errors;
        }
        return super.handle(address,errors);
    }
}