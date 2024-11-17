const Contact = require('../models/contactModel');

// Create a new contact
const createContact = async (req, res) => {
    try {
        // Destructure contact fields from the request body
        const { firstName, lastName, email, phone, company, jobTitle } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !company || !jobTitle) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if a contact with the same email already exists
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ message: "A contact with this email already exists." });
        }

        // Create a new contact instance and save it to the database
        const contact = new Contact({ firstName, lastName, email, phone, company, jobTitle });
        await contact.save();

        // Respond with the newly created contact
        res.status(201).json(contact);
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(400).json({ message: error.message });
    }
};

// Get all contacts
const getContacts = async (req, res) => {
    try {
        // Fetch all contacts from the database
        const contacts = await Contact.find();
        res.status(200).json(contacts); // Respond with the contacts
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ message: "Error fetching contacts." }); // Handle internal server errors
    }
};

// Update a contact
const updateContact = async (req, res) => {
    try {
        const { id } = req.params; // Extract contact ID from the URL parameters

        // Validate required fields for the update
        const { firstName, lastName, email, phone, company, jobTitle } = req.body;
        if (!firstName || !lastName || !email || !phone || !company || !jobTitle) {
            return res.status(400).json({ message: "All fields are required for update." });
        }

        // Update the contact in the database using its ID
        const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        // If the contact wasn't found, respond with a 404 error
        if (!contact) {
            return res.status(404).json({ message: "Contact not found." });
        }

        // Respond with the updated contact
        res.status(200).json(contact);
    } catch (error) {
        console.error("Error updating contact:", error);
        res.status(400).json({ message: error.message });
    }
};

// Delete a contact
const deleteContact = async (req, res) => {
    try {
        const { id } = req.params; // Extract contact ID from the URL parameters

        // Delete the contact by its ID
        const contact = await Contact.findByIdAndDelete(id);

        // If the contact wasn't found, respond with a 404 error
        if (!contact) {
            return res.status(404).json({ message: "Contact not found." });
        }

        // Respond with a success message after deletion
        res.status(200).json({ message: "Contact deleted successfully." });
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({ message: "Error deleting contact." });
    }
};

module.exports = { createContact, getContacts, updateContact, deleteContact };
