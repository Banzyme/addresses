import express  =  require('express');

const app = express();
app.set("PORT", process.env.PORT || 3001);

// test route
app.get('/', (request, response)=>{
    response.send("Address API is live!");
});

export default app;
