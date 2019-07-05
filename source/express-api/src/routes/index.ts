import * as express from 'express';
import { addressRoutes } from './address.routes';

export class AppRoutesConfig {
    /*
    ** BUILDER PATTERN: AppRoutesConfig creates routes according to builder pattern
    */
    static InitialiseAllRoutes(router: express.Router): void {
        addressRoutes(router);
    }

}