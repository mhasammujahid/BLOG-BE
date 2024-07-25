const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/blog';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1); // Exit process with failure code
    }
};

module.exports = connectToDatabase;
