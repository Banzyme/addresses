import * as express from 'express';
import { UserRoutes } from './user.routes';
import { UserController } from '../controllers/user.controller';

export class AppRoutesConfig {
    // Todo: is this the best way to do it?
    userController = new UserController();

    constructor(private app: express.Application) {
        this.InitialiseAllRoutes();
    }

    public InitialiseAllRoutes(): void {
        UserRoutes(this.app, this.userController);
    }

}