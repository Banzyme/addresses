import * as express from 'express';
import { AddressController } from '../controllers/address.controller';



export const addressRoutes = (app: express.Application, addressController: AddressController) => {

    app.route('/address/:address_type?')
        .get(addressController.verifyAdress)
}