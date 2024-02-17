// Importing the Express module
const express = require('express');

// Creating a router instance
const Router = express.Router();

// Routing for '/api' requests
Router.use('/api', require('./api/index'));

// Exporting the router
module.exports = Router;
