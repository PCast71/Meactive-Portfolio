import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

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
      setIsSending(true);
      setStatus('');

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  templateParams,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)

        .then((response) => {
          setStatus('Message sent successfully!');
          setIsSending(false);

          // Reset fields after short delay for nice animation
          setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
          }, 400);
        })
        .catch((error) => {
          console.error('FAILED...', error);
          setStatus('Something went wrong. Please try again.');
          setIsSending(false);
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
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? 'Sending...' : 'Submit'}
        </button>

        {status && (
          <div className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>
            {status}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
