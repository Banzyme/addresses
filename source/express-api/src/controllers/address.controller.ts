import { Request, Response } from 'express';
import {AddressService} from '../services/address.service';
import {ApiResponse} from '../classes/address-utility.class';

export class AddressController{
    
    static async verifyAddress(req: Request, res:Response){ 
        console.log('receiving data ...');
        try {
            const response = await AddressService.getInstance().classifyAddress(req.body);
            return response;
        } catch (error) {
            return ApiResponse.apiResponse400(error);
        }
    }
}