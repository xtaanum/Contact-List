import React, { useState } from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import EditContactsForm from "./EditContactsForm";

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice", phone: "055234890", location: "Dansoman" },
    { id: 2, name: "Bob", phone: "054694689", location: "Spintex" },
  ]);
  const [contactToEdit, setContactToEdit] = useState(null);

  // ADD CONTACT
  const handleAddContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now(), // Generate unique ID
    };
    setContacts([...contacts, contactWithId]);
  };

  // DELETE CONTACT
  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // EDIT CONTACT
  const handleEditContact = (updatedContact) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setContactToEdit(null); // Close the edit form
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contacts List</h1>

      <Contact
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={(contact) => setContactToEdit(contact)}
      />

      <ContactForm onAddContact={handleAddContact} />

      {contactToEdit && (
        <EditContactsForm
          contact={contactToEdit}
          handleEditContact={handleEditContact}
        />
      )}
    </div>
  );
}

export default App;
