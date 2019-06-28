import * as express from 'express';
import { IndexController } from '../controllers';

export const indexRoute = (router: express.Router) => {
    router.route('/')
        .get(IndexController.index);
}