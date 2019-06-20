import { Request, Response } from 'express';

export class AddressController{
    constructor(){}

    verifyAdress(req: Request, res:Response){
        // Get query params to determine what validation to perform
        // Use the Validator Class under utils to perform validation logic
        // Then generate a custom response object and send a JSON response

        const addresType = req.params.address_type || 'street_simple';
        res.send(`Your adress is invalid! You provided a query string:  ${addresType}`);
    }
}