import React, { useState, useEffect } from 'react'; 
import { Mail, ArrowRight, Menu, X, Home, User, Code, Rocket, Send, FileText } from 'lucide-react'; 
import './App.css';
import myPortrait from './mypicture.png';

import Contact from './Contact'; 
import Project from './Project'; 
import Skill from './Skill';
import About from './About';
import CV from './CV'; 
// REMOVED: VA import here

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false); 
  // REMOVED: vaOpen state here
  const [activeSection, setActiveSection] = useState('home');

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

  useEffect(() => {
    if (loading) return;

    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); 
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-content">
          <img src={portfolioImage} alt="Loading" className="loader-image" />
          <div className="loader-bar-bg"><div className="loader-bar-fill"></div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-bg">
      <header className="main-header">
        <div className="header-content">
          <div className="logo-section" onClick={() => scrollToSection('home')}>
            <img src={portfolioImage} alt={firstName} className="nav-profile-pic" />
            <h1 className="nav-name">{firstName} <span className="blue-text">{lastName}</span></h1>
          </div>
          <button className="right-nav-button" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="modal-overlay">
          <div className="centered-menu-card">
            <button className="modal-close-btn" onClick={() => setMenuOpen(false)}>
              <X size={30} />
            </button>

            <nav className="modal-nav-list">
              <div 
                className={`modal-nav-item ${activeSection === 'home' ? 'active-item' : ''}`} 
                onClick={() => scrollToSection('home')}
              >
                <Home className="purple-icon" /> <span>Home</span>
                {activeSection === 'home' && <div className="active-dot"></div>}
              </div>

              <div 
                className={`modal-nav-item ${activeSection === 'about' ? 'active-item' : ''}`} 
                onClick={() => scrollToSection('about')}
              >
                <User className="purple-icon" /> <span>About</span>
                {activeSection === 'about' && <div className="active-dot"></div>}
              </div>

              <div 
                className={`modal-nav-item ${activeSection === 'skills' ? 'active-item' : ''}`} 
                onClick={() => scrollToSection('skills')}
              >
                <Code className="purple-icon" /> <span>Skills</span>
                {activeSection === 'skills' && <div className="active-dot"></div>}
              </div>

              <div 
                className={`modal-nav-item ${activeSection === 'projects' ? 'active-item' : ''}`} 
                onClick={() => scrollToSection('projects')}
              >
                <Rocket className="purple-icon" /> <span>Projects</span>
                {activeSection === 'projects' && <div className="active-dot"></div>}
              </div>

              <div 
                className="modal-nav-item"
                onClick={() => {
                  setCvOpen(true);
                  setMenuOpen(false); 
                }}
              >
                <FileText size={22} className="purple-icon" /> <span>CV</span>
              </div>

              <div 
                className={`modal-nav-item ${activeSection === 'contact' ? 'active-item' : ''}`} 
                onClick={() => scrollToSection('contact')}
              >
                <Send className="purple-icon" /> <span>Contact</span>
                {activeSection === 'contact' && <div className="active-dot"></div>}
              </div>
            </nav>
          </div>
        </div>
      )}

      <main id="home" className="hero-section">
        <div className="available-pill"><span className="dot green"></span> Available for work</div>
        <div className="main-profile-circle"><img src={portfolioImage} alt={firstName} className="hero-portrait" /></div>
        <h2 className="main-name">{firstName} <span className="blue-text">{lastName}</span></h2>
        <p className="main-role">{currentRole}</p>
        <div className="cta-buttons">
          <button className="primary-cta" onClick={() => scrollToSection('projects')}>
            View Project <ArrowRight className="btn-icon" />
          </button>
          
        <a 
    href="https://canva.link/rvbeyswg5dfneef" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="secondary-cta"
    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
  >
    View VA Portfolio <Mail className="btn-icon blue-text" />
  </a>
          
          <button className="secondary-cta" onClick={() => scrollToSection('contact')}>
            Contact Me <Mail className="btn-icon blue-text" />
          </button>
        </div>
      </main>

      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>

      <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      {/* REMOVED: VA Component call here */}
    </div>
  );
}

export default App;