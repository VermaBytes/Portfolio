import React from 'react';

function Skills() {
  const skills = {
    Programming: [
      { name: 'JavaScript', icon: '/images/Javascript.jpg' }, // Example icon path
      { name: 'Basic Dot net', icon: '/images/dotnet.png' }, // Example icon path
    ],
    Frontend: [
      { name: 'React Js', icon: '/images/reactjs.jpg' },
      { name: 'Basic Angular', icon: '/images/angular.jpg' },
      { name: 'HTML5', icon: '/images/html.jpg' },
      { name: 'CSS3', icon: '/images/css3.jpg' },
      { name: 'Bootstrap', icon: '/images/bootstrap.jpg' },
    ],
    Backend: [
      { name: 'Node Js', icon: '/images/nodejs.jpg' },
      { name: 'Express Js', icon: '/images/Expressjs.png' },
    ],
    Databases: [
      { name: 'MongoDB', icon: '/images/mongodb.png' },
      { name: 'MySQL', icon: '/images/mysql.jpg' },
    ],
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
                <li key={i} className="skill-item"> {/* Add a class for styling */}
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="skill-icon" // Class for the icon image
                    />
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;