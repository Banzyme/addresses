import * as express from 'express';
import { AddressController } from '../controllers';

export const addressRoutes = (router: express.Router) => {
    //TO-DO: is address_type necessary?
    router.route('/address')
        .get(AddressController.verifyAddress)
}