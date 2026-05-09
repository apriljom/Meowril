import React from 'react';
// Changed imports to ensure compatibility
import { ExternalLink, Rocket, Layout, Globe } from 'lucide-react';
import './Project.css';

// Importing your actual local images
import factoryImg from './factory2.png';
import factory1Img from './factory1.png';

const Project = () => {
  const projectData = [
    
    {
      id: 1,
      title: "CODEMASTER",
      category: "Thesis Project",
      tag: "Featured Project",
      description: "CodeMaster is a 3D educational puzzle game that makes learning C# programming fun through coding challenges and interactive gameplay.",
      tech: ["Game Development", "C#", "Unity"],
      link: "https://codemaster-thesis.vercel.app", // O ang iyong Vercel link
      image: factoryImg 
    },
    {
      id: 2,
      title: "More Projects Coming Soon!",
      category: "Exciting Projects Coming Soon!",
      tag: "Featured Project",
      description: "I'm currently working on some fresh React and Frontend projects to showcase here. Stay tuned for updates as I polish my latest work!",
      tech: ["React", "CSS", "JavaScript"],
      link: "#",
      image: factory1Img // Using your local factory1.png
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-badge">
            <Rocket size={16} />
            <span>My Portfolio</span>
          </div>
          <h2 className="projects-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" />
                {project.tag && <span className="featured-tag">★ {project.tag}</span>}
              </div>

              <div className="project-content">
                <div className="project-type-row">
                  <Layout size={14} className="type-icon" />
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((skill, index) => (
                    <span key={index} className="tech-pill">{skill}</span>
                  ))}
                </div>

                <a href={project.link} className="view-project-link">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;