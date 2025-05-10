import React, { useState, useEffect } from "react";

const EditContactsForm = ({ contact, handleEditContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
  });

  // Populate form with existing contact info
  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name,
        phone: contact.phone,
        location: contact.location,
      });
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedContact = {
      ...contact,
      ...formData,
    };

    console.log("Updated Contact:", updatedContact);
    handleEditContact(updatedContact); // Send data to App
  };

  const handleCancel = () => {
    handleEditContact(null); // Close the modal without saving
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md w-full max-w-md space-y-4 shadow-lg"
      >
        <h2 className="text-xl font-bold text-center">Edit Contact</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactsForm;
