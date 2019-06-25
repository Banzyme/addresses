import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './../swagger.json';
import { AppRoutesConfig } from './routes';

let app = express();
app.set("PORT", process.env.PORT || 3001);

let router = express.Router();
AppRoutesConfig.InitialiseAllRoutes(router);

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

export default app;
