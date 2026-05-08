import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactData = [
    {
      id: 1,
      label: 'EMAIL',
      value: '10apriljoygarcia@gmail.com',
      icon: <span style={{fontSize: '20px'}}>📧</span>, // Emoji placeholder
      link: 'mailto:10apriljoygarcia@gmail.com',
    },
    {
      id: 2,
      label: 'GITHUB',
      value: 'April Garcia',
      icon: <span style={{fontSize: '20px'}}>💻</span>, // Emoji placeholder
      link: 'https://github.com/apriljom',
    },
    {
      id: 3,
      label: 'FACEBOOK',
      value: 'April Garcia',
      icon: <span style={{fontSize: '20px'}}>👥</span>, // Emoji placeholder
      link: 'https://www.facebook.com/Meowril',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="get-in-touch-badge">
          <span>Get In Touch</span>
        </div>

        <h2 className="contact-title">Contact Me</h2>
        
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? Let's connect!
        </p>

        <div className="contact-cards-list">
          {contactData.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon-box">
                {item.icon}
              </div>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;