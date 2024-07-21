# Blog Manager Project - Backend

This repository contains the backend code for the Blog Manager Project, built using Node.js, Express, and MongoDB. The project is part of a MERN (MongoDB, Express.js, React, Node.js) stack application.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction
The Blog Manager Project is a web application that allows users to create, edit, delete, and view blog posts. This repository specifically handles the backend side of the application using Node.js and Express.js.

## Features
- User authentication and authorization
- Create, edit, and delete blog posts
- View a list of all blog posts
- View individual blog post details
- RESTful API endpoints

## Installation
To get started with the project, follow these steps:

Clone the repository:
```bash
git clone https://github.com/mhasammujahid/blog-be.git
cd blog-manager-backend
```

Install the dependencies:
```bash
npm install
```

## Usage
To start the development server, run:
```bash
npm start
```
This will start the Node.js server, and you can interact with the API at `http://localhost:5000`.

## Folder Structure
The project structure is organized as follows:
```
blog-manager-backend/
├── config/
│   ├── db.js
│   ├── ...
├── controllers/
│   ├── authController.js
│   ├── postController.js
│   └── ...
├── models/
│   ├── User.js
│   ├── Post.js
│   └── ...
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── ...
├── middleware/
│   ├── authMiddleware.js
│   └── ...
├── .gitignore
├── server.js
├── package.json
├── README.md
└── ...
```
- `config/`: Contains configuration files, such as the database connection.
- `controllers/`: Contains the logic for handling API requests.
- `models/`: Contains Mongoose schemas and models.
- `routes/`: Contains the route definitions.
- `middleware/`: Contains middleware functions.
- `server.js`: The main entry point of the Node.js application.

## Scripts
In the project directory, you can run the following scripts:
- `npm start`: Starts the development server.
- `npm run dev`: Starts the development server with nodemon for automatic restarts on file changes.
- `npm test`: Runs the test suite.

## Dependencies
The project uses the following major dependencies:
- Express
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

## License
This project is licensed under the MIT License.

---