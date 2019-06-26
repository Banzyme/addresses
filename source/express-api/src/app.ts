import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './../swagger.json';
import { AppRoutesConfig } from './routes';

const app = express();
const  api_helper= require('./helpers/API_helper')

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/', (req, res) => {
    api_helper.lookupAddress('https://maps.googleapis.com/maps/api/geocode/json?address=Da+Nada+Farm+Botfontein+Road&key=AIzaSyBSFC36Y5iX_G9GeQmGL3jc723blrWJqgU')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.set("PORT", process.env.PORT || 3002);

let router = express.Router();
AppRoutesConfig.InitialiseAllRoutes(router);

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

export default app;
