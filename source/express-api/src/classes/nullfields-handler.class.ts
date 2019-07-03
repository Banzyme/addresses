import {AbstractHandler} from './abstract-handler.class';
import {FullStreetAddressModel} from '../models/full-address.model';

export class NullFieldsHandler extends AbstractHandler{

    public handle(address: FullStreetAddressModel, errors : number) : number{
        let nullFields='';
        for (let key in address) {
            if (address[key] === null)
                nullFields+=key+' | ';
        }
        if(nullFields!==''){
            console.log("NULL FIELDS");
            console.log(`         ${nullFields} field/s are null!
            => Fill "" in fields if meant to be blank.
            ------------------------------------------------------------------------------------------------\n`);
            ++errors;
        }
        return super.handle(address,errors);
    }
}