import * as express from 'express';
import { UserController } from './../controllers';


export const userRoutes = (router: express.Router) => {

    router.route('/users')
        .get(UserController.fetchAllUsers)
        .post(UserController.createNewUser);

    router.route('/users/:id')
        .get(UserController.fetchUserById)
        .put(UserController.updateUser)
        .delete(UserController.deleteUser);
}
