import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './../swagger.json';
import * as bodyParser from 'body-parser';
import { AppRouter } from './routes';
import { apiResponse404, apiResponse500 } from './utility';

/* 
** SERVER
*/

const app = express();

var options = {
    explorer: true
};

app.set("PORT", process.env.PORT || 3002);


/* 
** ROUTER
*/

let appRouter = new AppRouter.Builder()
    .withGenericsRouters()
    .withAddressRoutes()
    .build();

/*
** ROUTING 
*/

app.use(bodyParser.json());
app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', appRouter.getRouter());
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => 
  res.status(404).send(apiResponse404())
)
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => 
  res.status(500).send(apiResponse500())
)

export default app;
