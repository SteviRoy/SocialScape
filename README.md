# SocialScape API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

SocialScape API is a backend web application that provides a RESTful API for a social network platform. This application utilizes Express.js for routing, MongoDB as a database, and Mongoose as an ODM. Users can perform CRUD operations on users, thoughts, reactions, and friends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

Make sure you have MongoDB installed on your machine. Clone this repository and navigate to the project directory. Run `npm i` in the project directory to install all necessary dependencies.

## Usage

To start the server, run `node server.js` in the project directory. Then run `node utils/seedDatabase.js`. Use a tool like Insomnia or Postman to test the API routes.

## API Routes
The API provides the following routes:


+ User Routes:
  + Get all users
  + Get a single user by _id
  + Create a new user
  + Update a user by _id
  + Delete a user by _id
  + Add a friend to a user's friend list
  + Remove a friend from a user's friend list


+ Thought Routes:
  + Get all thoughts
  + Get a single thought by _id
  + Create a new thought
  + Update a thought by _id
  + Delete a thought by _id
  + Create a reaction for a thought
  + Delete a reaction by reactionId

## Contributions

Contributions to this project are welcome. Please create a new branch for your changes and submit a pull request when you are ready. Be sure to include a detailed description of your changes and any relevant tests.

## Credits

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Insomnia REST Client](https://insomnia.rest/)

## Tests

Currently, there are no tests available for this application. However, you can test the API endpoints using a tool like Insomnia or Postman.

## License

This project is licensed under the MIT license.

## Questions

If you have any questions, please feel free to reach out to me via email (Stevi.P.Roy@gmail.com) or visit my [GitHub profile](https://github.com/SteviRoy).
