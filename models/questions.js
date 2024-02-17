// Importing the module
const mongoose = require('mongoose');

// Defining the schema for the 'Question' collection
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]
});

// Creating the 'Question' model from the schema
const Question = mongoose.model('Question', questionSchema);

// Exporting the 'Question' model
module.exports = Question;
