import { Request, Response } from 'express';
// import {ValidateClass} from '../classes/validate.class';
import {AddressService} from '../services/address.service';
import { ApiResponse } from '../utility';

export class AddressController{
    
    static async verifyAddress(req: Request, res:Response){
        console.log('receiving data ...');
        try {
            const response = await AddressService.getInstance().classifyAddress(req.body);
            return response;
        } catch (error) {
            return ApiResponse.apiResponse500(error);
        }
    }
}