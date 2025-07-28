import React from 'react';

function Hero() {
  return (
    <div className="hero-content">
      <h1 className="hero-title slide-in-up delay-100">
        Hi, I'm <span className="name-highlight">Shobhit Verma</span>
      </h1>
      <p className="hero-subtitle slide-in-up delay-300">
        Full Stack Developer | Frontend Enthusiast | MERN Stack Specialist
      </p>
      <div className="hero-buttons">
        <a
          href="#projects"
          className="btn btn-primary slide-in-up delay-500"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="btn btn-secondary slide-in-up delay-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Hero;