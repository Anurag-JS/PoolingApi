// Importing the modules
const express = require('express');
const db = require('./config/mongoose');
const bodyParser=require('body-parser');
const Port = 3000;

// Creating an Express application instance
const app = express();


// Middleware to parse urlencoded bodies
app.use(bodyParser.urlencoded({extended:true}));


// Listening to the specified port for incoming connections
app.listen(Port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server is running on Port:", Port);
});
