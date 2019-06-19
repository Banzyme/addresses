import * as express from 'express';
import { userRoutes } from './user.routes';
import { UserController } from '../controllers/user.controller';
import { AddressController } from '../controllers/address.controller';
import { addressRoutes } from './address.routes';

export class AppRoutesConfig {
    // Todo: is this the best way to do it?
    userController = new UserController();
    adressController = new AddressController();

    constructor(private app: express.Application) {
        this.InitialiseAllRoutes();
    }

    public InitialiseAllRoutes(): void {
        userRoutes(this.app, this.userController);
        addressRoutes(this.app, this.adressController);
    }

}