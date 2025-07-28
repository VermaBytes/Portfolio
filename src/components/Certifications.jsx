import React from 'react';

function Certifications() {
  const certifications = [
    {
      name: 'Frontend Developer',
      issuer: 'GreatLearning',
    },
    {
      name: 'Frontend Development Certification',
      issuer: 'IBM Skill Build',
    },
  ];

  return (
    <div className="container">
      <h2 className="section-title fade-in delay-100">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`certificate-card slide-in-up delay-${200 + index * 100}`}
          >
            {/* Using inline SVG for simplicity. You could import a React component for icons. */}
            <svg xmlns="http://www.w3.org/2000/svg" className="certificate-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.928 12c.045 2.158.46 4.316 1.256 6.356C5.973 20.378 8.804 22 12 22s6.027-1.622 7.816-3.644c.796-2.04 1.211-4.198 1.256-6.356a12.001 12.001 0 00-1.78-9.016z" />
            </svg>
            <div className="certificate-details">
              <h3>
                {cert.name}
              </h3>
              <p>
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;