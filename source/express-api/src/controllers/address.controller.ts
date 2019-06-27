import { Request, Response } from 'express';
import {ValidateClass} from '../classes/validate.class';
import {AddressService} from '../services/address.service'

export class AddressController{
    
    static async verifyAddress(req: Request, res:Response){ 
        console.log('receiving data ...');
        let finalResponse= await AddressService.classifyAddress(req.body)
        .then(response => {
            return response;
        })
        .catch(error =>{
            console.log(error);
        });
        return finalResponse;

    }
}