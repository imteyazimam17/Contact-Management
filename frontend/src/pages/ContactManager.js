import React, { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";
import {
  fetchContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../api/contactApi";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]); // State to store contacts
  const [editingContact, setEditingContact] = useState(null); // State to track the contact being edited
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable the submit button during form submission

  // Load contacts from the API and set the contacts state
  const loadContacts = async () => {
    const data = await fetchContacts();
    setContacts(data);
  };

  // useEffect hook to load contacts when the component mounts
  useEffect(() => {
    loadContacts();
  }, []);

  // Handle form submission for adding or updating a contact
  const handleFormSubmit = async (contact) => {
    setIsSubmitting(true); // Disable submit button to prevent multiple submissions
    try {
      if (editingContact) {
        // If editing an existing contact, update it
        await updateContact(editingContact._id, contact);
        setEditingContact(null); // Clear the editing state
      } else {
        // Otherwise, create a new contact
        await createContact(contact);
      }
      await loadContacts(); // Refresh contacts after submission
    } catch (error) {
      console.error("Error submitting contact:", error);
    } finally {
      setIsSubmitting(false); // Re-enable the submit button after submission
    }
  };

  // Handle deleting a contact
  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id); // Delete contact by ID
      loadContacts(); // Refresh contacts after deletion
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="contact-manager">
      <h1 className="contact-manager-header">Contact Manager</h1>
      
      {/* Pass the form submission handler, editing data, and submission state to ContactForm */}
      <ContactForm
        onSubmit={handleFormSubmit}
        initialData={editingContact}
        isSubmitting={isSubmitting} // Pass submission state to disable the submit button
      />
      
      {/* Pass the contacts and handlers for edit/delete to ContactTable */}
      <ContactTable
        contacts={contacts}
        onEdit={(contact) => setEditingContact(contact)} // Set the editing contact when Edit is clicked
        onDelete={handleDeleteContact} // Handle contact deletion
      />
    </div>
  );
};

export default ContactManager;
