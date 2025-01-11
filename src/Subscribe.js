import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('Please enter a valid email address.');
      return;
    }

    emailjs
      .send(
        'service_pg7vmp7', // Replace with your EmailJS Service ID
        'template_y3jrai1', // Replace with your EmailJS Template ID
        { user_email: email }, // Pass email to the template
        'dNi-F7pGKOct7keJA' // Replace with your EmailJS Public Key
      )
      .then(  
        (response) => {
          setStatus('Subscription successful! Thank you.');
          setEmail('');
        },
        (error) => {
          setStatus('Failed to send email. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
            boxSizing: 'border-box',
          }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Subscribe
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Subscribe;
