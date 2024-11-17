const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempting to connect to MongoDB using the URI stored in the environment variable
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Use the new URL parser
            useUnifiedTopology: true, // Use the new server discovery and monitoring engine
        });

        console.log('MongoDB Connected'); // Log success message if connected
    } catch (error) {
        console.error('Database connection failed', error); // Log error message if connection fails
        process.exit(1); // Exit the process if connection fails
    }
};

module.exports = connectDB; // Exporting the connectDB function for use in other files
