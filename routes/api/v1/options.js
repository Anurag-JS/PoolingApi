// Importing the Express module
const express = require('express');

// Creating a router instance
const Router = express.Router();

// Importing the options controller
const optionsController = require('../../../controller/OptionsController');

// POST request to create a new option for a question
Router.post('/:id/create', optionsController.create);

// GET request to increment vote count for an option
Router.get('/:id/add_vote', optionsController.add_vote);

// DELETE request to delete an option
Router.delete('/delete/:id', optionsController.delete);

// Exporting the router
module.exports = Router;
