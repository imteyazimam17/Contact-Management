import axios from "axios";

// Define the API base URL for interacting with the backend
const API_URL = "http://localhost:5000/api/contacts";

// Fetch all contacts from the server
export const fetchContacts = async () => {
  // Send a GET request to the API to retrieve contacts
  const response = await axios.get(API_URL);
  // Return the response data (list of contacts)
  return response.data;
};

// Create a new contact and send it to the server
export const createContact = async (contact) => {
  // Send a POST request to create a new contact
  const response = await axios.post(API_URL, contact);
  // Return the response data (the newly created contact)
  return response.data;
};

// Update an existing contact by its ID
export const updateContact = async (id, contact) => {
  // Send a PUT request to update the contact by its ID
  const response = await axios.put(`${API_URL}/${id}`, contact);
  // Return the response data (updated contact)
  return response.data;
};

// Delete a contact by its ID
export const deleteContact = async (id) => {
  // Send a DELETE request to remove the contact by its ID
  const response = await axios.delete(`${API_URL}/${id}`);
  // Return the response data (confirmation message)
  return response.data;
};
