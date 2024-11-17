const mongoose = require('mongoose');

// Define the schema for the contact
const contactSchema = new mongoose.Schema({
    firstName: { 
        type: String, // The first name of the contact
        required: true // This field is required
    },
    lastName: { 
        type: String, // The last name of the contact
        required: true // This field is required
    },
    email: { 
        type: String, // The email address of the contact
        required: true, // This field is required
        unique: true // The email must be unique across all contacts
    },
    phone: { 
        type: String, // The phone number of the contact
        required: true // This field is required
    },
    company: { 
        type: String, // The company of the contact
        required: true // This field is required
    },
    jobTitle: { 
        type: String, // The job title of the contact
        required: true // This field is required
    },
});

// Create and export the Contact model using the schema
module.exports = mongoose.model('Contact', contactSchema);
