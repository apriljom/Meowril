import React from 'react';
import { Rocket, Calendar, Heart, Github, Facebook, Mail, ArrowUp } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      {/* 1. Intro Cards */}
      <div className="info-card">
        <p>
          Hi! I'm <span className="highlight-text">April</span>, a passionate frontend 
          developer specializing in creating stunning, responsive, and user-friendly 
          web interfaces. I love bringing designs to life with modern web technologies.
        </p>
      </div>

      <div className="info-card">
        <p>
          With expertise in React, JavaScript, and modern CSS frameworks, I craft 
          beautiful digital experiences that are both visually appealing and highly functional.
        </p>
      </div>

      {/* 2. Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <Rocket className="stat-icon purple" />
          <h3 className="stat-number">5+</h3>
          <p className="stat-label">PROJECTS</p>
        </div>
        
        <div className="stat-card">
          <Calendar className="stat-icon purple" />
          <h3 className="stat-number">Fresh</h3>
          <p className="stat-label">GRADUATE</p>
        </div>

        <div className="stat-card">
          <Heart className="stat-icon purple" />
          <h3 className="stat-number">100%</h3>
          <p className="stat-label">DEDICATION</p>
        </div>
      </div>

      {/* 3. Footer Actions */}
      <div className="about-footer">
        <div className="social-links">
          <div className="social-icon-box"><Github size={20} /></div>
          <div className="social-icon-box"><Facebook size={20} /></div>
          <div className="social-icon-box"><Mail size={20} /></div>
        </div>
        
        <button className="scroll-top-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <ArrowUp size={24} />
        </button>
      </div>
    </section>
  );
};

export default About;