import React, { useState } from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Alice", phone: "020372725", location: "Spintex" },
    { name: "Bob", phone: "0555635849", location: "Madina" },
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact List</h1>
      <Contact contacts={contacts} />
      <ContactForm onAddContact={handleAddContact} />
    </div>
  );
}

export default App;
