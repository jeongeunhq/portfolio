import React from 'react';
import '../css/skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">📌 SKILLS</h2>
      <div className="skills-container">
        {/* Language */}
        <div className="skills-category">
          <div className="category-icon">💻</div>
          <h3 className="category-title">Language</h3>
          <div className="skills-list">
            <span className="skill-badge">C</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">Python</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skills-category">
          <div className="category-icon">📱</div>
          <h3 className="category-title">Frontend</h3>
          <div className="skills-list">
            <span className="skill-badge">React</span>
            <span className="skill-badge">Dart</span>
            <span className="skill-badge">HTML5</span>
            <span className="skill-badge">CSS3</span>
            <span className="skill-badge">Figma</span>
            <span className="skill-badge">Bootstrap</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skills-category">
          <div className="category-icon">🖥️</div>
          <h3 className="category-title">Backend</h3>
          <div className="skills-list">
            <span className="skill-badge">PostgreSQL</span>
            <span className="skill-badge">Firebase</span>
            <span className="skill-badge">MySQL</span>
          </div>
        </div>

        {/* DevOps */}
        <div className="skills-category">
          <div className="category-icon">☁️</div>
          <h3 className="category-title">DevOps</h3>
          <div className="skills-list">
            <span className="skill-badge">AWS</span>
            <span className="skill-badge">Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
