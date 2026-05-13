import React, { useEffect, useState } from 'react';
import { Download, RotateCw, Layout, Share2, PenTool, ArrowLeft, Cpu, Zap, Star, Briefcase } from 'lucide-react';
import './VA.css';
import myPortrait from './mypicture.png';

const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`va-skill-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="va-card-inner">
        {/* Front */}
        <div className="va-card-front">
          <div className="va-icon-placeholder" style={{ backgroundColor: service.color }}>
            {service.icon}
          </div>
          <h3 className="va-card-title">{service.title}</h3>
          <p className="va-card-desc">{service.desc}</p>
          <div className="va-hint"><RotateCw size={12} /> Click to flip</div>
        </div>

        {/* Back */}
        <div className="va-card-back">
          <h3 className="va-card-title" style={{ color: service.color }}>OFFERS</h3>
          <ul className="va-list">
            {service.features.map((f, i) => <li key={i}>• {f}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const VA = ({ isOpen, onClose }) => {
  const [showWarning, setShowWarning] = useState(false);

  const servicesData = [
    { id: 1, title: "Graphic Design", desc: "Social Media & Branding", color: "#ec4899", icon: <Layout size={20} color="white" />, features: ["Canva Pro", "Logo Design", "Posts"] },
    { id: 2, title: "Content Creation", desc: "Video & Copywriting", color: "#8b5cf6", icon: <PenTool size={20} color="white" />, features: ["CapCut Edits", "Scripts", "Captions"] },
    { id: 3, title: "SMM Management", desc: "Strategic Growth", color: "#6366f1", icon: <Share2 size={20} color="white" />, features: ["Engagement", "Hashtags", "Audit"] }
  ];

  if (!isOpen) return null;

  return (
    <div className="va-overlay">
      {/* Saktong laki ng App.jsx main card */}
      <div className="va-app-card portfolio-bg">
        
        <nav className="va-nav">
          <button className="va-back-button" onClick={onClose}>
            <ArrowLeft size={18} /> Back to Developer Portfolio
          </button>
        </nav>

        <div className="va-scroll-content">
          {/* Block 1: Hero */}
          <header className="va-section-block hero-center">
            <div className="va-img-wrapper">
              <img src={myPortrait} alt="Profile" className="va-img" />
            </div>
            <h2 className="va-title">VA & SMM Portfolio</h2>
          </header>

          {/* Block 2: Intro */}
          <section className="va-section-block">
            <h3 className="va-label blue-text">Introduction</h3>
            <p className="va-text">
              I am a results-driven <span className="blue-text">Virtual Assistant</span> and Social Media Manager. I specialize in helping brands grow through strategic content and efficient support.
            </p>
          </section>

          {/* Block 3: Services (The Flip Cards) */}
          <section className="va-section-block no-bg">
            <h3 className="va-label">Services Offered</h3>
            <div className="va-grid">
              {servicesData.map(s => <ServiceCard key={s.id} service={s} />)}
            </div>
          </section>

          {/* Block 4: Skills & Stats */}
          <div className="va-stats-row">
            <div className="va-stat-box">
              <Cpu size={16} className="blue-text" />
              <span className="va-stat-n">100%</span>
              <span className="va-stat-l">DEDICATION</span>
            </div>
            <div className="va-stat-box">
              <Zap size={16} className="blue-text" />
              <span className="va-stat-n">FAST</span>
              <span className="va-stat-l">LEARNER</span>
            </div>
            <div className="va-stat-box">
              <Star size={16} className="blue-text" />
              <span className="va-stat-n">TOP</span>
              <span className="va-stat-l">QUALITY</span>
            </div>
          </div>

          <footer className="va-footer">
            {showWarning && <div className="va-alert">⚠️ Ask permission first!</div>}
            <button className="va-download-btn" onClick={() => {
              setShowWarning(true);
              setTimeout(() => setShowWarning(false), 3000);
            }}>
              <Download size={18} /> Download Portfolio
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default VA;