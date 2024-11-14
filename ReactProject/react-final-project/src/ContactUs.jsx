import React, { useState } from 'react';


function ContactUs() {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMessageSent(true);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Reach out to us with any questions or feedback.</p>
      </div>

      <div className="contact-us-content">
        <div className="contact-us-form-container">
          <form onSubmit={handleSubmit} className="contact-us-form">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

      {isMessageSent && (
        <div className="thank-you-message">
          <p>Thank you for reaching out! We will get back to you shortly.</p>
        </div>
      )}

      <div className="contact-us-info">
        <h3>Contact Information</h3>
        <p>We are available through the following channels:</p>
        <ul>
          <li>Phone: +1 234 567 890</li>
          <li>Email: contact@yourwebsite.com</li>
          <li>Address: 123 Your Street, Your City, Country</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
