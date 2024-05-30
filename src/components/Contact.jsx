/*Contact.jsx Derek Leduc 300600738 COMP229 Web Application Development Assignment 1*/

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

/* Contact component for displaying contact information and a form */
export default function Contact() {
  /* State for managing form data */
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    message: ''
  });

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  /* Handler for form input changes */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* Handler for form submission */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/');
  };

  return (
    <div className="contact">
      <div className={`content ${visible ? 'visible' : ''}`}>
        {/* Section header */}
        <h2>Contact Me</h2>
        
        {/* Contact information */}
        <div className="contact-info">
          <p>Email: <a href="mailto:dleduc1@my.centennialcollege.ca">dleduc1@my.centennialcollege.ca</a></p>
          <p>Phone Number: <a href="tel:416-555-5555">416-555-5555</a></p>
          <p>Office: 234 Fake Street, Toronto, ON, Canada</p>
        </div>
        
        <p>Or leave me a message and I'll get right back to you</p>
        <br /> {/* Added line break here */}
        
        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              {/* Input fields for personal information */}
              <label>
                Full Name:
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Phone Number:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </label>
              <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              </label>
            </div>
            <div className="form-column">
              {/* Input fields for location information */}
              <label>
                City:
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              </label>
              <label>
                State/Province:
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
              </label>
              <label>
                Zip/Postal Code:
                <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
              </label>
              <label>
                Country:
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
              </label>
            </div>
          </div>
          {/* Textarea for message */}
          <label className="message-label">
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
          </label>
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
