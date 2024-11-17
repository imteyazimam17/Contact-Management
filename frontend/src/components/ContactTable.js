import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

// ContactTable component to display a list of contacts
const ContactTable = ({ contacts, onEdit, onDelete }) => {
  return (
    // TableContainer to hold the entire table structure
    <TableContainer component={Paper}>
      <Table>
        {/* TableHead defines the column headers */}
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Actions</TableCell> {/* Actions column for Edit/Delete buttons */}
          </TableRow>
        </TableHead>
        
        {/* TableBody iterates through the contacts to create rows for each contact */}
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              {/* TableCell for each field in the contact */}
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>

              {/* Actions column containing Edit and Delete buttons */}
              <TableCell>
                {/* Edit button to trigger the onEdit callback with the contact data */}
                <IconButton onClick={() => onEdit(contact)}>
                  <Edit />
                </IconButton>

                {/* Delete button to trigger the onDelete callback with the contact ID */}
                <IconButton onClick={() => onDelete(contact._id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
