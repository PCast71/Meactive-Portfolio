import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = 'This field is required';
    if (!email) newErrors.email = 'This field is required';
    if (!message) newErrors.message = 'This field is required';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) newErrors.email = 'Please enter a valid email address';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      console.log('Sending email with the following parameters:', templateParams);
      console.log('User ID:', process.env.REACT_APP_EMAILJS_USER_ID);
      console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to submit the form. Please try again.');
      });
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default Contact;