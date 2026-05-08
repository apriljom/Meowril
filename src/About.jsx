import React from 'react';
import { User, Rocket, Calendar, Heart } from 'lucide-react';
import './About.css';
import myPortrait from './mypicture2.jpg'; // Using your existing portrait variable

const About = () => {
  const stats = [
    { id: 1, label: "PROJECTS", value: "0+", icon: <Rocket size={20} /> },
    { id: 2, label: "YEARS EXP", value: "0+", icon: <Calendar size={20} /> },
    { id: 3, label: "DEDICATION", value: "100%", icon: <Heart size={20} /> }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <div className="about-badge">
            <User size={16} />
            <span>About Me</span>
          </div>
          <h2 className="about-title">Get To Know Me</h2>
          <p className="about-subtitle">Passionate developer crafting digital experiences</p>
        </div>

        {/* Image Section */}
        <div className="about-image-wrapper">
          <img src={myPortrait} alt="About Portrait" className="about-portrait" />
        </div>

        {/* Text Content Section */}
        <div className="about-text-content">
          <div className="about-paragraph-card">
            <p>
              Hi! I'm <span className="highlight-text">April</span>, a passionate frontend 
              developer specializing in creating stunning, responsive, and user-friendly 
              web interfaces. I love bringing designs to life with modern web technologies.
            </p>
          </div>

          <div className="about-paragraph-card">
            <p>
              With expertise in React, JavaScript, and modern CSS frameworks, I craft 
              beautiful digital experiences that are both visually appealing and 
              highly functional.
            </p>
          </div>
        </div>

        {/* Stats Grid Section */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;