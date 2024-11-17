// Import necessary dependencies
const express = require('express');  // Express framework
const dotenv = require('dotenv');   // For loading environment variables from a .env file
const cors = require('cors');       // Cross-Origin Resource Sharing middleware
const bodyParser = require('body-parser');  // Middleware to parse incoming request bodies
const connectDB = require('./config/db');  // Custom function to connect to the database
const contactRoutes = require('./routes/contactRoutes');  // Import the routes for managing contacts

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize the Express app
const app = express();

// Enable CORS for handling cross-origin requests
app.use(cors());  // This will allow all origins by default, you can customize it if needed

// Use body-parser to parse JSON data in incoming requests
app.use(bodyParser.json());  // Middleware to parse incoming JSON request bodies

// Define the routes for managing contacts
app.use('/api', contactRoutes);  // Prefixes all routes in contactRoutes with "/api"

// Start the server and listen on the specified port or default to 5000
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);  // Log the server start message
});
