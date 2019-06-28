import * as express from 'express';
import { indexRoute } from './generic.routes';
import { addressRoutes } from './address.routes';

export class AppRouter {
    private router:express.Router;

    private constructor() {}

    public getRouter(): express.Router {
        return this.router;
    }

    public static Builder = class {
        private builderRouter:express.Router;
    
        public constructor() {
            this.builderRouter = express.Router();
        }

        public withGenericsRouters(): this {
            indexRoute(this.builderRouter);
            return this;
        }
    
        public withAddressRoutes(): this {
            addressRoutes(this.builderRouter);
            return this;
        }
    
        public build(): AppRouter {
            let appRouter:AppRouter = new AppRouter();
            appRouter.router = this.builderRouter;
            return appRouter;
        }
    }
}