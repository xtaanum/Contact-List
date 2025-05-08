import React from "react";

function Contact({ contacts }) {
  return (
    <div className="space-y-4">
      {contacts.map((contact, index) => (
        <div key={index} className="border p-4 rounded-md shadow-sm bg-white">
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Location:</strong> {contact.location}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Contact;
