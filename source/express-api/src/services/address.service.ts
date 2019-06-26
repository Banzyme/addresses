import { Request, Response } from 'express';
import { SimpleStreetAddressModel } from "../models/simple-address.model";
import { FullStreetAddressModel } from "../models/full-address.model";
import {ValidateClass} from "../classes/validate.class";
import {ClassifyClass} from "../classes/classify.class";

const  api_helper= require('./helpers/API_helper')
export class AddressService{
    static classifyAddress(address : FullStreetAddressModel){ 
        //If doesnt exist then return error
        if( ValidateClass.validateAddress(address) === false ){
            return "Address does not exist!"
        }
        //Address exists then classify address
        else{
            return ClassifyClass.classify(address)
        }
    }
}