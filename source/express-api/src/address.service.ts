import { Request, Response } from 'express';
import { SimpleStreetAddressModel } from "./models/simple-address.model";
import { FullStreetAddressModel } from "./models/full-address.model";
import {ValidateClass} from "./validate.class";

const  api_helper= require('./helpers/API_helper')
export class AddressService{
    static classifyAddress(address : FullStreetAddressModel){ 
        //If doesnt exist then return error
        if( ValidateClass.validateAddress(address) === false ){
            return "Address does not exist!"
        }
        //Address exists then classify address
        else{
            //check for word smallholding in AddressLine1 or complexName
            if(address.addressLine1.includes('smallholding') || address.complexName.includes('smallholding')){
                return "Smallholding address"
            }

            else if(address.addressLine1.includes('farm') || address.complexName.includes('farm') || address.complexName.includes('plaas') || address.addressLine1.includes('plaas') || address.addressLine1.includes('plot') || address.complexName.includes('plot')){
                return "Farm address"
            }

            else if(address.addressLine1.includes('business') || address.addressLine1.includes('pty') || address.addressLine1.includes('ltd') || address.addressLine1.includes('p.o') || address.addressLine1.includes('private bag') || address.addressLine1.includes('company') || address.addressLine1.includes('enterprise')){
                return "Business address"
            }

            else if(address.addressLine1.includes('block') || address.addressLine1.includes('room') || address.addressLine1.includes('rm') || address.addressLine1.includes('floor') || address.addressLine1.includes('flr')){
                return "Within a building address"
            }

            else{
                return "Domestic address"
            }
        }
    }
}