// Importing the modules
const express = require('express');


const Port = 3000;

// Creating an Express application instance
const app = express();



// Listening to the specified port for incoming connections
app.listen(Port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server is running on Port:", Port);
});
