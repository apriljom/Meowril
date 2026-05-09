import React from 'react';
import './Contact.css';

// I-import ang iyong mga images dito
import emailIcon from './gmail.png';
import githubIcon from './github.png';
import facebookIcon from './facebook.png';
import instagramIcon from './insta.png';
import tiktokIcon from './tiktok.png';
import threadsIcon from './threads.png';

const Contact = () => {
  const contactData = [
    {
      id: 1,
      label: 'EMAIL',
      value: '10apriljoygarcia@gmail.com',
      icon: <img src={emailIcon} alt="Email" className="contact-icon-img" />,
      link: 'mailto:10apriljoygarcia@gmail.com',
    },
    {
      id: 2,
      label: 'GITHUB',
      value: 'April Garcia',
      icon: <img src={githubIcon} alt="Github" className="contact-icon-img" />,
      link: 'https://github.com/apriljom',
    },
    {
      id: 3,
      label: 'FACEBOOK',
      value: 'April Garcia',
      icon: <img src={facebookIcon} alt="Facebook" className="contact-icon-img" />,
      link: 'https://www.facebook.com/Meowril',
    },
    {
      id: 4,
      label: 'INSTAGRAM',
      value: '_meowril',
      icon: <img src={instagramIcon} alt="Instagram" className="contact-icon-img" />,
      link: 'https://www.instagram.com/_meowril/',
    },
    {
      id: 5,
      label: 'TIKTOK',
      value: '_meowril',
      icon: <img src={tiktokIcon} alt="TikTok" className="contact-icon-img" />,
      link: 'https://www.tiktok.com/@_meowril?lang=en',
    },
    {
      id: 6,
      label: 'THREADS',
      value: '_meowril', 
      icon: <img src={threadsIcon} alt="Threads" className="contact-icon-img" />,
      link: 'https://www.threads.net/@_meowril',
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