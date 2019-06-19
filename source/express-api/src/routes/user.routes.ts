import * as express from 'express';
import { UserController } from './../controllers/user.controller';


export const userRoutes = (app: express.Application, userController: UserController) => {

    app.route('/users')
        .get(userController.fetchAllUsers)
        .post(userController.createNewUser);

    app.route('/users/:id')
        .get(userController.fetchUserById)
        .put(userController.updateUser)
        .delete(userController.deleteUser);
}
