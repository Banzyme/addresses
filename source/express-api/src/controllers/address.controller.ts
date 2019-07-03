import { Request, Response } from 'express';
import {AddressService} from '../services/address.service'

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