import * as express from 'express';
import { Request, Response } from 'express';
import { AddressController } from '../controllers';

export const addressRoutes = (router: express.Router) => {
    router.get('/', function (req, res) {
        res.send(`WELCOME TO THE ADDRESS VALIDATION API!\n
                Send a postman post request to url: http://localhost:3002/address \n
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

    router.post('/address', function (req, res) {
        AddressController.verifyAddress(req,res)
        .then(response => {
            console.log(response);
            res.send(response);
        })
        .catch(error => {console.log(error);})
    })
}