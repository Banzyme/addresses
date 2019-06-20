import { Request, Response } from 'express';

export class AddressController{
    constructor(){}

    verifyAdress(req: Request, res:Response){
        const addresType = req.params.address_type || 'street_simple';
        res.send(`Your adress is invalid! You provided a query string:  ${addresType}`);
    }
}