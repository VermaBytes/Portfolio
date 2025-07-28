import React from 'react';

function Skills() {
  const skills = {
    Programming: ['JavaScript', 'Basic Dot net'],
    Frontend: ['React Js', 'Basic Angular', 'HTML', 'CSS', 'Bootstrap'],
    Backend: ['Node Js', 'Express Js'],
    Databases: ['MongoDB', 'MySQL'],
  };

  return (
    <div className="container">
      <h2 className="section-title fade-in delay-100">My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={category}
            className={`skill-card slide-in-up delay-${200 + index * 100}`} // Add staggered animation
          >
            <h3>{category}</h3>
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;