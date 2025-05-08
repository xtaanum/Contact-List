import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      location: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, location } = this.state;

    const newContact = { name, phone, location };

    this.props.onAddContact(newContact);
    this.setState({ name: "", phone: "", location: "" }); // reset form
  };

  render() {
    const { name, phone, location } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Add a New Contact</h2>

        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="location"
          value={location}
          onChange={this.handleChange}
          placeholder="Location"
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
