import express  =  require('express');
import { AppRoutesConfig } from './routes';

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger.json');

app.set("PORT", process.env.PORT || 3001);
const routes = new AppRoutesConfig(app);


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// test route
// app.get('/', (request, response)=>{
//     response.send("Address API is live!");
// });

export default app;
