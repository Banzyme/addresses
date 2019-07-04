import * as express from 'express';
import { AddressController } from '../controllers';
import { Request, Response } from 'express';
import { ApiResponse } from '../classes/address-utility.class';

export const addressRoutes = (router: express.Router) => {
    router.get('/', function (req, res) {
        res.send(`WELCOME TO THE ADDRESS VALIDATION API!\n
                Send a postman post request to url: http://localhost:3002/api/v1/address \n
                \n
                Structure of JSON Request: \n
                address_line1, \n
                complex_no, \n
                complex_name, \n
                street_no, \n
                street_name, \n
                suburb, \n
                city, \n
                province, \n
                zip_code, \n
                \n
                Request Examples are in data folder.`)
    })

    router.route('/address')
        .post(
            async function (req: Request, res:Response) {
                await AddressController.verifyAddress(req,res)
                .then(response => {
                    res.send(response)
                })
                .catch(error => {
                    res.send(ApiResponse.apiResponse500(error))
                })
            }
        );
}