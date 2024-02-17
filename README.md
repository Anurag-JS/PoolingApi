# Polling System API

This project is a simple polling system developed as an API, where users can create questions, add options, and vote on those options. The system is designed to be open and does not require authentication.

## Features

- Create a question
- Add options to a question
- Add a vote to an option of a question
- Delete a question (optional: restrictions apply if options have votes)
- Delete an option (optional: restrictions apply if option has votes)
- View a question with its options and all the votes given to it

## Technologies Used

- Node.js for server-side scripting
- MongoDB as the database
- Express.js for API routing
- Other libraries as necessary

## API Endpoints

POST /questions/create: Create a question
POST /questions/:id/options/create: Add options to a specific question
DELETE /questions/:id: Delete a question
DELETE /options/:id: Delete an option
POST /options/:id/add_vote: Increment the count of votes for an option
GET /questions/:id: View a question with its options and all the votes given to it


