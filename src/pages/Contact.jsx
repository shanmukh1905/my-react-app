import React, { useState } from 'react';
import Card from '../components/Card';
import { getData } from '../utils/dataLoader';

const Contact = () => {
  const data = getData();
  const { personalInfo } = data;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormStatus('success');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const contactInfo = (
    <div>
      <h3>Let's Connect</h3>
      <p>Feel free to reach out with any questions or opportunities.</p>
      <div>
        <div style={{ margin: '10px 0' }}>
          <span>✉️ {personalInfo.email}</span>
        </div>
        <div style={{ margin: '10px 0' }}>
          <span>📱 {personalInfo.phone}</span>
        </div>
        <div style={{ margin: '10px 0' }}>
          <span>🔗 <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
            {personalInfo.linkedin}
          </a></span>
        </div>
      </div>
    </div>
  );

  const contactForm = (
    <div>
      {formStatus === 'success' && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={{ width: '100%', padding: '8px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px' }}>Send Message</button>
      </form>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Card content={contactInfo} />
      <Card title="Send a Message" content={contactForm} />
    </div>
  );
};

export default Contact;