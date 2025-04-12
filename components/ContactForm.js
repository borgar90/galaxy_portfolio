// components/ContactForm.js
// Norsk dokumentasjon: En kontaktskjema-komponent for å sende meldinger.
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Håndter input-endringer
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Håndter skjema-submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du sende data til en API-endepunkt
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-form">
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name / Navn" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Message / Melding" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send</button>
        </form>
      )}
      <style jsx>{`
        .contact-form {
          padding: 1rem;
          background-color: #eee;
          border-radius: 8px;
          margin-top: 1rem;
        }
        input, textarea {
          display: block;
          width: 100%;
          margin-bottom: 0.5rem;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
