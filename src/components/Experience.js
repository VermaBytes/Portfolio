import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Junior Frontend Developer',
      company: 'Aquatrax IT Solutions',
      logoUrl: '/images/aquatrax.png', 
      duration: 'Sep 2024 - Feb 2025',
      location: 'Remote',
      description: [
        'Developed responsive UIs using HTML5, CSS3, JavaScript, and Bootstrap.',
        'Worked on Angular and ASP.NET projects ensuring cross-browser compatibility and performance.',
        'Collaborated with backend developers for API integration and dynamic content rendering.',
        'Ensuring responsiveness of applications.'
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'NetCoreInfo Business Group',
      logoUrl: '/images/netcoreNew.png',
      duration: 'Oct 2023 - Jan 2024',
      location: 'Noida',
      description: [
        'Designing and developing user interfaces using React.js.',
        'Building backend services and APIs with Node.js and Express.js.',
        'Managing and querying the database with MongoDB.',
        'Ensuring responsiveness of applications.'
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'Aikam India Pvt Ltd',
      logoUrl: '/images/Akam.jpg', // Replace with Aikam India logo path
      duration: 'Feb 2022 - May 2022',
      location: 'Lucknow',
      description: [
        'Developed responsive web applications using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile optimization.',
        'Assisted in the implementation of new features and functionality on existing websites, collaborating closely with senior developers and designers.',
        'Conducted testing and debugging to ensure smooth user experience and identified opportunities to enhance website performance and usability.'
      ],
    },
  ];

  return (
    <div className="container">
      <h2 className="section-title fade-in delay-100">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-card slide-in-up delay-${200 + index * 100}`}
          >
            <div className="experience-header">
              {exp.logoUrl && ( // Conditionally render logo if URL exists
                <img
                  src={exp.logoUrl}
                  alt={`${exp.company} Logo`}
                  className="company-logo" // Add a class for styling the logo
                />
              )}
              <div className="experience-title-company"> {/* New wrapper for title and company */}
                <h3>{exp.title}</h3>
                <p className="experience-company">
                  {exp.company} - {exp.location}
                </p>
              </div>
              <span className="experience-duration">
                {exp.duration}
              </span>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;