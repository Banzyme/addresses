import { FullStreetAddressModel } from '../models/full-address.model';

export class FormatCheckerClass{
    static hasExtraFields(address:FullStreetAddressModel){
        let extraFields='';
        for (let key in address) {
            if ( !('doAddressExistCheck|addressLine1|complexNo|complexName|streetNo|streetName|suburb|city|province|zipCode').includes(key)){
                extraFields+=key+' | ';
            }
        }
        return extraFields;
    }
    static hasFieldsMissing(address:FullStreetAddressModel){
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
        return missingFields;

    }
    static hasNullFields(address: FullStreetAddressModel) {
        let nullFields='';
        for (let key in address) {
            if (address[key] === null)
                nullFields+=key+' | ';
        }
        return nullFields;
    }
    /*
    ** CHAIN OF RESPONSIBILTY PATTERN?: Check missing fields, extra fields, null fields, zipCode format of address request
    */
    static checkFormat (address: FullStreetAddressModel ) {
        let hasError;
        let regex =new RegExp( /\d{4}/); //Check 4 consecutive numbers
        let errors=`Your request has the following format error/s:\n\n`;
        
        if(!(this.hasFieldsMissing(address)==='')){
            errors=errors+ `        ${this.hasFieldsMissing(address)} field/s missing in your request!
        => Please make sure all required fields are filled in. Fill "" in fields if meant to be blank.
        ------------------------------------------------------------------------------------------------\n`;
            hasError= true;
        }
        if(!(this.hasExtraFields(address)==='')){
            errors=errors+ `        ${this.hasExtraFields(address)} field/s are unecessarily added!
        => Please remove these fields from your request.
        ------------------------------------------------------------------------------------------------\n`;
            hasError= true;
        }
        if (!(this.hasNullFields(address)==='')){
            errors=errors+ `         ${this.hasNullFields(address)} field/s are null!
        => Fill "" in fields if meant to be blank.
        ------------------------------------------------------------------------------------------------\n`;
            hasError= true;
        }
        if(!regex.test(address.zipCode) && address.zipCode!==''){
            errors= errors+ `        Zip code does not match format of 4 digits!
        => Please enter 4 digits for zipCode.
        ------------------------------------------------------------------------------------------------\n`;
            hasError= true;
        }

        return hasError?errors:undefined;
    }
}