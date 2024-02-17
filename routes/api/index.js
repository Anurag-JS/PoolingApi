// Importing the Express module
const express = require('express');

// Creating a router instance
const Router = express.Router();

// Routing for '/v1' requests
Router.use('/v1', require('./v1/index'));

// Exporting the router
module.exports = Router;
