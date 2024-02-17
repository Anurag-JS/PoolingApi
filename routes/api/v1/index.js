// Importing the Express module
const express = require('express');

// Creating a router instance
const Router = express.Router();

// Routing for '/question' requests
Router.use('/question', require('./questions'));

// Routing for '/options' requests
Router.use('/options', require('./options'));

// Exporting the router
module.exports = Router;
