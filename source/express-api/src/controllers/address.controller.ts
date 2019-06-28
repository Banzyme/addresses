import { Request, Response } from 'express';
// import {ValidateClass} from '../classes/validate.class';
import {AddressService} from '../services/address.service';
import { apiResponse, apiResponse404 } from '../utility';

export class AddressController{
    
    static async verifyAddress(req: Request, res:Response){
        console.log('receiving data ...');
        const finalResponse= await AddressService.getInstance().classifyAddress(req.body)
        .then(response => {
            return response;
        })
        .catch(error =>{
            console.log(error);
        });
        return finalResponse;
    }
}