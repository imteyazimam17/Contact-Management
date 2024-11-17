import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

// ContactForm component to handle both adding and editing contacts
const ContactForm = ({ onSubmit, initialData = {} }) => {
  // Initialize state to manage form data
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  // State to track if the form is in "edit mode"
  const [isEditMode, setIsEditMode] = useState(false);

  // Effect to handle initialization when initialData is passed (edit mode)
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      // Pre-fill the form with the data passed as initialData
      setContact({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        company: initialData.company || "",
        jobTitle: initialData.jobTitle || "",
      });
      setIsEditMode(true); // Set to edit mode when data is present
    } else {
      setIsEditMode(false); // Default to add mode if no initial data
    }
  }, [initialData]); // Runs whenever initialData changes

  // Handle form field changes
  const handleChange = (e) => {
    // Update the contact state based on the input field
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Handle form submission (either add or update)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent, passing contact data and edit mode status
    onSubmit(contact, isEditMode);
  };

  return (
    // Form structure using Material-UI Box component
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Text fields for each form field */}
      <TextField
        label="First Name"
        name="firstName"
        value={contact.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={contact.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={contact.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Phone"
        name="phone"
        type="tel"
        value={contact.phone}
        onChange={handleChange}
        required
      />
      <TextField
        label="Company"
        name="company"
        value={contact.company}
        onChange={handleChange}
        required
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={contact.jobTitle}
        onChange={handleChange}
        required
      />
      {/* Submit button text changes based on edit mode */}
      <Button variant="contained" type="submit">
        {isEditMode ? "Update" : "Add"}
      </Button>
    </Box>
  );
};

export default ContactForm;
