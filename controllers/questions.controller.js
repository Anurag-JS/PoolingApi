// Importing the models
const Question = require('../models/questions');
const Option = require('../models/options');

// Controller function to create a new question
module.exports.create = async function(req, res) {
    // Creating a new question
    await Question.create(req.body, function(err, ques) {
        if (err) {
            console.log("error in creating the question schema", err);
        }
        console.log(ques);
        res.send(ques);
    });
};

// Controller function to retrieve details of a question along with its options
module.exports.showDetails = async function(req, res) {
    //console.log(req.params.id);
    const ques = await Question.findById(req.params.id).populate('options');
    if (ques) {
        res.send(ques);
    } else {
        res.send("id does not exist");
    }
};

// Controller function to delete a question along with its associated options
module.exports.deleteQues = async function(req, res) {
    const ques = await Question.findById(req.params.id).clone().catch(function(err) {
        console.log(err);
    });
    if (ques) {
        await Question.deleteOne(req.params.id).clone().catch(function(err) {
            console.log(err);
        });
        await Option.deleteMany({ question: req.params.id }).clone().catch(function(err) {
            console.log(err);
        });
        res.send("question deleted");
    } else {
        res.send('question does not exist');
    }
};
