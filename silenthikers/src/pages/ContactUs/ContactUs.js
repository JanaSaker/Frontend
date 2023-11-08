import React, { useState } from 'react';
import '../ContactUs/ContactUs.css';
import axios from 'axios';
import i32 from '../ContactUs/37.jpeg';

const ContactUs = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the input values
    const name = event.target.elements.nameInput.value;
    const email = event.target.elements.emailInput.value;
    const phoneNumber = event.target.elements.phoneNumberInput.value;

    // Check if any required field is empty
    if (!name && !email && !phoneNumber) {
      setErrorMessage('Please fill all the required fields.');
      return;
    }
    if (!name) {
      setErrorMessage('Please provide a name.');
      return;
    }
    if (!email) {
      setErrorMessage('Please provide a email.');
      return;
    }
    if (!phoneNumber) {
      setErrorMessage('Please provide a phoneNumber.');
      return;
    }
    const userData = {
      name,
      email,
      phoneNumber,
    };

    try {
      await axios.post('http://localhost:8080/api/users', userData);
      event.target.reset();
      setErrorMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <img src={i32} alt="" className="register-img-background" />
      <div className="register-h1">Register</div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="register-form">
        <label className="register-inputs-label" htmlFor="nameInput">
          User Name
        </label>
        <input
          type="text"
          id="nameInput"
          name="name"
          className="register-name-input"
        />
        <label className="register-inputs-label" htmlFor="emailInput">
          Email
        </label>
        <input
          type="text"
          id="emailInput"
          name="email"
          className="register-email-input"
        />
        <label className="register-inputs-label" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumberInput"
          name="phoneNumber"
          className="register-PhoneNumber-input"
        />
        <button type="submit" className="register-button">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
