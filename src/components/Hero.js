import React, { useState, useEffect } from 'react';

function Hero() {
  // Phrases to cycle through in the typing animation
  const professions = [
    "Full Stack Developer",
    "Frontend Enthusiast",
    "MERN Stack Specialist",
    "Problem Solver",
    "Web Innovator"
  ];

  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // Initial typing speed

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = professions[currentProfessionIndex];

      // Determine whether to add or remove characters
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      // Adjust typing speed
      setTypingSpeed(isDeleting ? 50 : 100); // Faster deleting, normal typing

      if (!isDeleting && currentText === fullText) {
        // If finished typing a word, pause briefly, then start deleting
        setTypingSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        // If finished deleting, move to the next word
        setIsDeleting(false);
        setCurrentProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setTypingSpeed(100); // Reset typing speed for new word
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    // Cleanup timer on component unmount or re-render
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentProfessionIndex, typingSpeed, professions]); // Dependencies

  return (
    <div className="hero-content">
      <h1 className="hero-title slide-in-up delay-100">
        Hi, I'm <span className="name-highlight">Shobhit Verma</span>
      </h1>
      <p className="hero-subtitle slide-in-up delay-300">
        {currentText}
        <span className="typing-cursor">|</span> {/* Blinking cursor */}
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