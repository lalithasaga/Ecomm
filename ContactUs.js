import React, { useState } from 'react';
import axios from 'axios';
import './ConatctUs.css';


const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const userData = {
        name,
        email,
        phone,
      };
  
      axios
        .post('https://e-com-47543-default-rtdb.firebaseio.com/ConatctUs.json')
        .then(() => {
          
          setName('');
          setEmail('');
          setPhone('');
        })
        .catch((error) => {
          console.error('Error storing data:', error);
        });
    };
  
    return (
      <div className="contact-us">
        <h2>ConatctUs</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;