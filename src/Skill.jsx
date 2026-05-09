import React, { useState } from 'react';
import { Terminal, RotateCw } from 'lucide-react';
import './Skill.css';

const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`skill-card-container ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="skill-card-inner">
        {/* FRONT SIDE */}
        <div className="skill-card-front">
          <div className="skill-card-header">
            <div className="skill-icon-placeholder" style={{ backgroundColor: skill.color }}>
              <span className="skill-icon-text">{skill.iconText}</span>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
          
          <h3 className="skill-name">{skill.name}</h3>
          <p className="skill-desc">{skill.desc}</p>
          
          <div className="skill-progress-bg">
            <div 
              className="skill-progress-fill" 
              style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
            ></div>
          </div>
          <div className="flip-hint">
            <RotateCw size={14} /> Click to flip
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="skill-card-back">
           <div className="skill-icon-placeholder back-badge" style={{ backgroundColor: skill.color }}>
              <span className="skill-icon-text">{skill.iconText}</span>
           </div>
           <h3 className="skill-name">{skill.name}</h3>
           <ul className="sub-skills-list">
             {skill.subSkills.map((sub, i) => (
               <li key={i}><span className="bullet" style={{ color: skill.color }}>•</span> {sub}</li>
             ))}
           </ul>
           <div className="flip-hint">
            <RotateCw size={14} /> Click to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = () => {
  const skillData = [
    { 
      id: 1, name: "React", level: 90, desc: "Component-based UI", color: "#61dbfb", iconText: "RE",
      subSkills: ["Hooks", "Context API", "Router", "Redux", "Vite"]
    },
    { 
      id: 2, name: "JavaScript", level: 90, desc: "ES6+ & Modern JS", color: "#f7df1e", iconText: "JS",
      subSkills: ["Async/Await", "Closures", "Modules", "Web APIs", "DOM"]
    },
    { 
      id: 3, name: "Next.js", level: 85, desc: "SSR & Full-Stack", color: "#81e326", iconText: "NX",
      subSkills: ["App Router", "Server Components", "SEO", "API Routes"]
    },
    { 
      id: 4, name: "TypeScript", level: 80, desc: "Type-safe code", color: "#3178c6", iconText: "TS",
      subSkills: ["Interfaces", "Generics", "Types", "Enums"]
    },
    { 
      id: 5, name: "HTML/CSS", level: 95, desc: "Responsive Design", color: "#e34f26", iconText: "H5",
      subSkills: ["Flexbox", "CSS Grid", "Animations", "SASS", "Semantic UI"]
    },
    { 
      id: 6, name: "Tailwind CSS", level: 85, desc: "Utility-first CSS", color: "#38bdf8", iconText: "TW",
      subSkills: ["Config Customization", "Responsive Utilities", "Dark Mode", "Plugins"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-badge"><Terminal size={16} /> <span>Skills</span></div>
          <h2 className="skills-title">Skills And Expertise</h2>
        </div>
        <div className="skills-grid">
          {skillData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;