const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDatabase = require("./utils/db")

dotenv.config(); 

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes/index');
app.use(routes);

connectToDatabase()

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Set the port
const PORT = process.env.PORT || 3000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
