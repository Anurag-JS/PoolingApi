// Importing the Mongoose module
const mongoose = require('mongoose');

// Defining the schema for the 'Option' collection
const optionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    vote: {
        type: Number,
        default: 0
    },
    add_vote: {
        type: String,
    }
});

// Creating the 'Option' model from the schema
const Option = mongoose.model('Option', optionSchema);

// Exporting the 'Option' model
module.exports = Option;
