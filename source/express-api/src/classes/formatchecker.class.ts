import { FullStreetAddressModel } from '../models/full-address.model';
import {ExtraFieldsHandler} from './extrafields-handler.class';
import {NullFieldsHandler} from './nullfields-handler.class';
import {MissingFieldsHandler} from './missingfields-handler.class';

export class FormatCheckerClass{
    /*
    ** CHAIN OF RESPONSIBILTY PATTERN: Check missing fields, extra fields, null fields of address request
    */
    static checkFormat (address: FullStreetAddressModel ): number{
        let regex =new RegExp( /\d{4}/); //Check 4 consecutive numbers
        let errors=0;

        console.log('Your request has the following format error/s:\n\n')
        if(!regex.test(address.zipCode) && address.zipCode!==''){
            console.log('ZIP CODE FORMAT');
            console.log(`        Zip code does not match format of 4 digits!
        => Please enter 4 digits for zipCode.
        ------------------------------------------------------------------------------------------------\n`);
            errors++;
        }
        const missingFieldsHandler= new MissingFieldsHandler();
        const extraFieldsHandler= new ExtraFieldsHandler();
        const nullFieldsHandler = new NullFieldsHandler();

        extraFieldsHandler.setNext(missingFieldsHandler).setNext(nullFieldsHandler);

        const errorCount = extraFieldsHandler.handle(address,errors);
        console.log("Error count : "+errorCount)
        /*
        ** SOME NOTIFICATION PATTERN?: So user will know if errors or not
        */
        return errorCount;
    }
}