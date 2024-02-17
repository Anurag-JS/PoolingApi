// Importing the Express module
const express = require('express');

// Creating a router instance
const Router = express.Router();

// Importing the questions controller
const question_controller = require('../../../controller/QuestionsController');

// Routing for creating a new question
Router.post('/create', question_controller.create);

// Routing for viewing details of a question
Router.get('/view/:id', question_controller.showDetails);

// Routing for deleting a question
Router.delete('/delete/:id', question_controller.deleteQues);

// Routing for '/options' requests
Router.use('/options', require('./options'));

// Exporting the router
module.exports = Router;
