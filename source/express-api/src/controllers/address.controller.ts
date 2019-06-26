import { Request, Response } from 'express';
import {ValidateClass} from '../validate.class';
import {AddressService} from '../address.service'
const  api_helper= require('./helpers/API_helper')

export class AddressController{
    
    static verifyAdress(req: Request, res:Response){ 
        res.send(AddressService.classifyAddress(req.body));

        // const addressType = req.params.address_type || 'street_simple';
        // res.send(`Your address is invalid! You provided a query string:  ${addressType}`);
    }
}