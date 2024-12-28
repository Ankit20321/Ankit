
import React from 'react';
import './Skill.css';
import "../Certification/Certification.css";

const Skill = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Express.js', level: 80 },
  {name: 'Docker', level: 70},
  {name: 'git', level: 90},
  {name: 'PowerBI', level: 80},
  {name: 'SQL', level: 80},
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
      <div className="certification-scroller">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-content">
              <h3>{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div></div>
    </section>
  );
}

export default Skill;