const axios = require(`axios`);
const express = require(`express`);
const bodyParser = require(`body-parser`);
const massive = require('massive');
const controller = require('./controller');

require ('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING)
    .then (dbInstance => console.log('server running and listening at DB') ||  
        app.set('db', dbInstance)
    )  
    .catch(err => {
        console.log(process.env.CONNECTION_STRING)
        console.err(err);
     })


app.get(`/api/inventory`, controller.getInventory);
app.post(`/api/product`, controller.newProduct);
app.delete(`/api/product/:id`, controller.deleteProduct);
app.put(`/api/product/:id`, controller.editProduct);



const port = process.env.SERVER_PORT || 8085

app.listen (port, ()=>{ console.log(`server listening on port ${port}`);});