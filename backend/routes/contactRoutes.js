const express = require('express');
const router = express.Router(); // Initialize the router
const {
    createContact,  // Controller function to create a new contact
    getContacts,    // Controller function to get all contacts
    updateContact,  // Controller function to update a contact by ID
    deleteContact,  // Controller function to delete a contact by ID
} = require('../controllers/contactController');

// Route to create a contact
// This route listens for POST requests at /contacts and calls createContact function
router.post('/contacts', createContact);

// Route to get all contacts
// This route listens for GET requests at /contacts and calls getContacts function
router.get('/contacts', getContacts);

// Route to update a contact by ID
// This route listens for PUT requests at /contacts/:id, where :id is the contact's ID
// It calls the updateContact function with the provided ID
router.put('/contacts/:id', updateContact);

// Route to delete a contact by ID
// This route listens for DELETE requests at /contacts/:id, where :id is the contact's ID
// It calls the deleteContact function with the provided ID
router.delete('/contacts/:id', deleteContact);

// Export the router to be used in the main app
module.exports = router;
