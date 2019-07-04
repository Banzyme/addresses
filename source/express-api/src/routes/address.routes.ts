import { Request, Response } from 'express';
import * as express from 'express';
import { AddressController } from '../controllers';
import { ApiResponse } from '../utility';

export const addressRoutes = async (router: express.Router) => {
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