const axios = require(`axios`);
const express = require(`express`);
const bodyParser = require(`body-parser`);
const massive = require('massive');
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

app.get('/api/inventory', (req, res) => {
    const db = app.get('db');
    db.get_inventory()
        .then(products => {
            res.send(products);
        })       
});


const port = process.env.SERVER_PORT || 8080

app.listen (port, ()=>{ console.log(`server listening on port ${port}`);});