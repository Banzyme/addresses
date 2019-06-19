import { Request, Response } from 'express';

export class AddressController{
    constructor(){}

    verifyAdress(req: Request, res:Response){
        res.send("Your adress is invalid!");
    }
}