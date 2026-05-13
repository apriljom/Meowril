import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Download, X } from 'lucide-react';
import './CV.css';
import myPortrait from './mypicture.png';

const CV = ({ isOpen, onClose }) => {

  const [showWarning, setShowWarning] = useState(false);

  // Logic para i-disable ang scroll sa labas
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function para sigurado na babalik ang scroll pag-close
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cv-overlay" onClick={onClose}> 
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        
        <button className="cv-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="cv-header">
          <div className="cv-profile-wrapper">
            <img src={myPortrait} alt="Profile" className="cv-profile-img" />
          </div>
          
        </div>

        <div className="cv-content">

          {/* Contact Section */}
          <div className="cv-section-card">
            <h3 className="cv-section-title">Contact</h3>

            <div className="cv-item">
              <Phone size={18} className="cv-icon" />
              <div>
                <p className="cv-label">Phone</p>
                <p className="cv-value">0929 114 3860</p>
              </div>
            </div>

            <div className="cv-item">
              <Mail size={18} className="cv-icon" />
              <div>
                <p className="cv-label">Gmail</p>
                <p className="cv-value">10apriljoygarcia@gmail.com</p>
              </div>
            </div>

            <div className="cv-item">
              <MapPin size={18} className="cv-icon" />
              <div>
                <p className="cv-label">Address</p>
                <p className="cv-value">Dasmariñas, Cavite</p>
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="cv-section-card">
            <h3 className="cv-section-title">Personal Details</h3>

            <div className="cv-grid">
              <span className="cv-label">Gender</span>
              <span className="cv-value text-right">Female</span>

              <span className="cv-label">Age</span>
              <span className="cv-value text-right">22</span>

              <span className="cv-label">Date of Birth</span>
              <span className="cv-value text-right">April 1, 2004</span>

              <span className="cv-label">Nationality</span>
              <span className="cv-value text-right">Filipino</span>

              <span className="cv-label">Marital Status</span>
              <span className="cv-value text-right">Single</span>
            </div>
          </div>

          {/* Education Section */}
<div className="cv-section-card">
  <h3 className="cv-section-title">Education</h3>

  <div className="cv-timeline">

    {/* College */}
    <div className="timeline-item active">
      <div className="timeline-dot"></div>

      <p className="timeline-year">2022 - 2026</p>

      <p className="timeline-school">
        National College of Science and Technology
      </p>

      <p className="timeline-course">
        BS in Computer Science
      </p>

      <p className="timeline-status">Graduated</p>
    </div>

    {/* Senior High School */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <p className="timeline-year">2020 - 2022</p>

      <p className="timeline-school">
        Philippine Christian University
      </p>

      

      <p className="timeline-status">Graduated</p>
    </div>

    {/* High School */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <p className="timeline-year">2016 - 2020</p>

      <p className="timeline-school">
        New Era National High School
      </p>

      <p className="timeline-status">Graduated</p>
    </div>

  </div>
</div>
</div>

        <div className="cv-footer">

          {showWarning && (
            <div className="download-popup">
              ⚠️ Please ask permission before downloading this CV.
            </div>
          )}

          <button
            className="download-cv-btn"
            onClick={() => {
              setShowWarning(true);

              setTimeout(() => {
                setShowWarning(false);
              }, 3000);
            }}
          >
            <Download size={18} /> Download CV
          </button>

        </div>
      </div>
    </div>
  );
};

export default CV;