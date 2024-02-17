// Importing the modules
const mongoose = require('mongoose');
const env = require('./environment');

// Main function to establish connection to MongoDB
async function main() {
    // Getting the MongoDB connection URI from the environment module
    const mongoURI = env.mongoose_path;
    
    // Connecting to MongoDB using Mongoose
    await mongoose.connect(mongoURI);
    console.log("Mongoose Connection Successful!!");
}

// Calling the main function and handling any errors
main().catch(error => console.log("Mongoose not connected ", error));

