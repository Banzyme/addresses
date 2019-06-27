import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './../swagger.json';
import { AppRoutesConfig } from './routes';

const app = express(), bodyParser = require('body-parser');

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

export default app;
