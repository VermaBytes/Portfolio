import React, { useState, useEffect } from 'react';

// Move the professions array outside the component to prevent it from being recreated on every render.
const professions = [
  "Full Stack Developer",
  "Frontend Enthusiast",
  "MERN Stack Specialist",
  "Problem Solver",
  "Web Innovator"
];

function Hero() {
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = professions[currentProfessionIndex];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setTypingSpeed(100);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentProfessionIndex, typingSpeed]); // 'professions' is no longer in dependencies as it's outside.

  return (
    <div className="hero-content">
      <h1 className="hero-title slide-in-up delay-100">
        Hi, I'm <span className="name-highlight">Shobhit Verma</span>
      </h1>
      <p className="hero-subtitle slide-in-up delay-300">
        {currentText}
        <span className="typing-cursor">|</span>
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