import React from 'react';

function About() {
  return (
    <div className="container">
      <h2 className="section-title fade-in delay-100">About Me</h2>
      <div className="about-content">
        <div className="about-image-container fade-in delay-300">
          <img
            src="/images/Shobhitphoto.jpg" // <-- UPDATED PATH HERE
            alt="Shobhit Verma"
            className="about-image"
          />
        </div>
        <div className="about-text slide-in-up delay-500">
          <p>
            Hello! I'm Shobhit Verma, a passionate Full Stack Developer with a knack for building engaging user interfaces and robust backend systems. I hold an MCA from IIMT College, Greater Noida, and a BCA from Goel Institute Of Higher Studies, Lucknow. My journey into development began with a strong curiosity for how things work on the web, and it has evolved into a dedication to creating efficient, scalable, and user-friendly applications.
          </p>
          <p>
            I specialize in developing responsive and user-friendly interfaces with technologies like React.js, HTML, CSS, and Bootstrap. On the backend, I'm proficient with Node.js and Express.js, and I manage databases using MongoDB and MySQL. I'm always eager to learn new technologies and improve my skills to deliver high-quality solutions.
          </p>
          <p>
            My experience includes developing responsive UIs, working on Angular and ASP.NET projects, and collaborating on API integration. I've also focused on ensuring the responsiveness of applications throughout my roles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;