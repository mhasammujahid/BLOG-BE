const express = require('express');
const router = express.Router();

// Import user routes
const userRoutes = require('./user');

// Use the user routes
router.use('/users', userRoutes);

// You can add more routes here, for example:
// const productRoutes = require('./productRoutes');
// router.use('/products', productRoutes);

module.exports = router;
