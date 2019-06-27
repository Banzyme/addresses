import * as express from 'express';
import { addressRoutes } from './address.routes';

export class AppRoutesConfig {
    // Todo: is this the best way to do it?

    static InitialiseAllRoutes(router: express.Router): void {
        addressRoutes(router);
    }

}