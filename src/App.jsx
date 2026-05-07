import React, { useState, useEffect } from 'react'; 
import { Mail, ArrowRight, Menu, X, Home, User, Code, Rocket, FileText, Send } from 'lucide-react'; // Added new icons
import './App.css';
import myPortrait from './mypicture.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State for the menu overlay

  const firstName = "April";
  const lastName = "Garcia";
  const portfolioImage = myPortrait;
  const currentRole = "Frontend Developer";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-content">
          <img src={portfolioImage} alt="Loading" className="loader-image" />
          <div className="loader-bar-bg">
            <div className="loader-bar-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-bg">
      {/* 1. Header */}
      <header className="mobile-header">
        <div className="logo-section">
          <img src={portfolioImage} alt={firstName} className="nav-profile-pic" />
          <h1 className="nav-name">
            {firstName} <span className="blue-text">{lastName}</span>
          </h1>
        </div>
        {/* Toggle Menu Button */}
        <button className="menu-button" onClick={() => setMenuOpen(true)}>
          <Menu className="menu-icon" />
        </button>
      </header>

      {/* 2. Menu Overlay (Shows when menuOpen is true) */}
      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-header">
            <div className="logo-section">
              <img src={portfolioImage} alt={firstName} className="nav-profile-pic" />
              <h1 className="nav-name">
                {firstName} <span className="blue-text">{lastName}</span>
              </h1>
            </div>
            <button className="close-button" onClick={() => setMenuOpen(false)}>
              <X size={30} />
            </button>
          </div>

          <nav className="menu-items">
            <div className="menu-item active">
              <Home className="menu-icon-purple" /> <span>Home</span>
              <div className="active-dot"></div>
            </div>
            <div className="menu-item">
              <User className="menu-icon-purple" /> <span>About</span>
            </div>
            <div className="menu-item">
              <Code className="menu-icon-purple" /> <span>Skills</span>
            </div>
            <div className="menu-item">
              <Rocket className="menu-icon-purple" /> <span>Projects</span>
            </div>
            <div className="menu-item">
              <FileText className="menu-icon-purple" /> <span>CV</span>
            </div>
            <div className="menu-item">
              <Send className="menu-icon-purple" /> <span>Contact</span>
            </div>
          </nav>
        </div>
      )}

      {/* 3. Hero Section */}
      <main className="hero-section">
        <div className="available-pill">
          <span className="dot green"></span>
          Available for work
        </div>
        <div className="main-profile-circle">
          <img src={portfolioImage} alt={firstName} className="hero-portrait" />
        </div>
        <h2 className="main-name">
          {firstName} <span className="blue-text">{lastName}</span>
        </h2>
        <p className="main-role">{currentRole}</p>
        <div className="cta-buttons">
          <button className="primary-cta">
            View My Work <ArrowRight className="btn-icon" />
          </button>
          <button className="secondary-cta">
            Contact Me <Mail className="btn-icon blue-text" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;