import * as express from 'express';
import { AddressController } from '../controllers';

export const addressRoutes = (router: express.Router) => {

    router.route('/address/:address_type?')
        .get(AddressController.verifyAdress)
}