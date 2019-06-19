import * as express from 'express';
import { UserController } from './../controllers/user.controller';


export const userRoutes = (app: express.Application, userController: UserController) => {

    app.route('/address/')
        .get(userController.fetchAllUsers)
        .post(userController.createNewUser);
}