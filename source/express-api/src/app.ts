import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './../swagger.json';
import { AppRoutesConfig } from './routes';
import {ApiResponse} from './classes/address-utility.class';
import * as bodyParser from 'body-parser';

const app = express();

var options = {
    explorer: true
};

app.set("PORT", process.env.PORT || 3002);

let router = express.Router();
AppRoutesConfig.InitialiseAllRoutes(router);

app.use(bodyParser.json())

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use('/api/v1', router);
app.use('/address', router);
app.use('/', router);
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => 
  res.status(404).send(ApiResponse.apiResponse404())
)
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => 
  res.status(400).send(ApiResponse.apiResponse400())
)

export default app;
