/*

CMSC 100 Week 4 - Web Servers
Notes:
    To run this program, run:
        npm install
        node index.js

    * You need to install the used packages first since the node_modules folder is ignored by git

*/


const express = require('express');
const bodyParser =require('body-parser');

const app = express();

// use the body parser package to parse the message in the body that is received by the POST endpoint
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// GET endpoint for 'home'
app.get('/', (req, res) => {

    // res.send() is similar to return in functions; code after that is not executed anymore
    res.send("Hello!");
});

app.get('/greeting', (req, res) => {

    // req.query holds the URL parameters of GET requests
    console.log(req.query);
    res.send('Hello '+ req.query.name);
})

app.post('/submit-data', (req, res) => {

    // req.body holds the message sent by POST requests
    console.log(req.body.message);
    res.send("Received a POST request");
});

// the server listens at port 3000
app.listen(3000, () => { 
    console.log("Server started at port 3000")
});
