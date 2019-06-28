import { Request, Response } from 'express';
import * as express from 'express';
import { AddressController } from '../controllers';
import { apiResponse, apiResponse404, apiResponse500 } from '../utility';

export const addressRoutes = async (router: express.Router) => {
    router.route('/address')
        .post(
            async function (req: Request, res:Response) {
                await AddressController.verifyAddress(req,res)
                .then(response => {
                    console.log('SH: ', response);
                    // res.send(response);

                    res.send(apiResponse({
                        status: 100,
                        message: response
                    }))
                })
                .catch(error => {
                    res.send(apiResponse({
                        status: 500,
                        message: error
                    }))
                })
            }
        );
}