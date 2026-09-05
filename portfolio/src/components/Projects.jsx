import React from 'react';
import { Github, ExternalLink, Code2, Bot, Car, Hotel, Layout } from 'lucide-react';

/**
 * Projects Component
 * Displays GitHub-linked project cards with descriptions, key features, and GitHub buttons.
 * (No inline code snippets - focused on repository access and clean presentation).
 */
const Projects = () => {
  const projectsData = [
    {
      id: 'hotel-management',
      title: 'Hotel Management System',
      category: 'Python Desktop App',
      icon: Hotel,
      githubUrl: 'https://github.com/Shreyagupta05/MyProject',
      description:
        'Built a comprehensive desktop OOP application in Python using Tkinter for GUI and SQLite for persistent database storage. Designed for customer check-in/check-out, room allocation, and automated billing generation.',
      techStack: ['Python', 'Tkinter', 'SQLite', 'OOP'],
      highlights: [
        'Automated billing and invoice generation',
        'Real-time room availability status tracking',
        'Secure customer record search and management',
      ],
    },
    {
      id: 'shreya-assistant',
      title: 'Shreya Voice Assistant',
      category: 'AI Voice Automation',
      icon: Bot,
      githubUrl: 'https://github.com/guptashreya2305/shreya_assistant',
      description:
        'Voice-activated AI assistant built with Python speech recognition and text-to-speech libraries. Performs system tasks, web searches, application execution, and automated date/time announcements.',
      techStack: ['Python', 'SpeechRecognition', 'pyttsx3', 'OS Automation'],
      highlights: [
        'Real-time voice command processing & speech synthesis',
        'Automated browser navigation & web search execution',
        'System controls & date/time announcements',
      ],
    },
    {
      id: 'car-price-prediction',
      title: 'Car Price Prediction System',
      category: 'Machine Learning',
      icon: Car,
      githubUrl: 'https://github.com/guptashreya2305/CarPrice',
      description:
        'Designed and implemented an ML-based regression pipeline to predict car market prices based on brand, mileage, vehicle age, and fuel type. Evaluated model precision using standard statistical metrics.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Linear Regression'],
      highlights: [
        'Data cleaning, feature scaling, & encoding pipeline',
        'Evaluated with R² Score, MAE, and RMSE metrics',
        'Predictive valuation for used automotive market',
      ],
    },
    {
      id: 'portfolio-website',
      title: 'Interactive 3D Portfolio Website',
      category: 'Web Application',
      icon: Layout,
      githubUrl: 'https://github.com/guptashreya2305/potflio',
      description:
        'A modern, recruiter-friendly developer portfolio built using React, Vite, and Django. Features a clean white & blue design system, responsive layout, education tracker, and direct GitHub links.',
      techStack: ['React.js', 'Vite', 'Django', 'CSS3'],
      highlights: [
        'Integrated with Django WSGI backend serving static assets',
        'Fully responsive glassmorphism card components',
        'Recruiter-focused project & certificate showcases',
      ],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: '#ffffff',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">FEATURED REPOSITORIES</span>
          <h2 className="section-title">Projects & Code Repositories</h2>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {projectsData.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card-3d"
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff',
                }}
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'var(--accent-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0284c7',
                      }}
                    >
                      <ProjectIcon size={24} />
                    </div>
                    <span className="badge">{project.category}</span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '12px',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul
                    style={{
                      paddingLeft: '18px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    {project.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '24px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: '#f1f5f9',
                          color: '#0369a1',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View on GitHub Action Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '11px 20px',
                      fontSize: '0.92rem',
                    }}
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
