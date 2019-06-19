import * as express from 'express';
import {UserController} from './../controllers/user.controller';


export const UserRoutes = (app: express.Application, userController: UserController) =>{
    app.route('/users')
    .get(userController.fetchAllUsers)
}
