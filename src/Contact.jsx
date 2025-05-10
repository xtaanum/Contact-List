import React from "react";

function Contact({ contacts, onDelete, onEdit }) {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="border p-4 rounded-md shadow-sm bg-white"
        >
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Location:</strong> {contact.location}
          </p>

          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => onEdit(contact)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(contact.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
