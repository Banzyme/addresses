import express  =  require('express');
import { AppRoutesConfig } from './routes';

const app = express();
app.set("PORT", process.env.PORT || 3001);
const routes = new AppRoutesConfig(app);
// test route
app.get('/', (request, response)=>{
    response.send("Address API is live..!");
});

export default app;
