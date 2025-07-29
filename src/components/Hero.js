/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';

// Main professional phrases for the subtitle
const professions = [
  "Full Stack Developer",
  "Frontend Enthusiast",
  "MERN Stack Specialist",
  "Problem Solver",
  "Web Innovator"
];

// Phrase for the Radha Radha typing effect
const radhaPhrases = ["राधा वल्लभ श्री हरिवंश"];

function Hero() {
  // State for the main professional typing effect
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // State for the "Radha Radha" typing effect
  const [radhaCurrentText, setRadhaCurrentText] = useState("");
  const [isRadhaDeleting, setIsRadhaDeleting] = useState(false);
  const [radhaTypingSpeed, setRadhaTypingSpeed] = useState(150);

  // useEffect for the main professional typing effect
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
        setTypingSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setTypingSpeed(100); // Reset typing speed for new word
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentProfessionIndex, typingSpeed]);

  // New useEffect for the "Radha Radha" typing effect
  useEffect(() => {
    let radhaTimer;
    const handleRadhaTyping = () => {
      const fullText = radhaPhrases[0]; // Always "Radha Radha"

      setRadhaCurrentText(
        isRadhaDeleting
          ? fullText.substring(0, radhaCurrentText.length - 1)
          : fullText.substring(0, radhaCurrentText.length + 1)
      );

      setRadhaTypingSpeed(isRadhaDeleting ? 70 : 150); // Faster deleting for Radha Radha

      if (!isRadhaDeleting && radhaCurrentText === fullText) {
        setRadhaTypingSpeed(1500); // Pause at end of word
        setIsRadhaDeleting(true);
      } else if (isRadhaDeleting && radhaCurrentText === "") {
        setIsRadhaDeleting(false);
        // No index change, just repeat "Radha Radha"
        setRadhaTypingSpeed(150);
      }
    };

    radhaTimer = setTimeout(handleRadhaTyping, radhaTypingSpeed);
    return () => clearTimeout(radhaTimer);
  }, [radhaCurrentText, isRadhaDeleting, radhaTypingSpeed]); // Include radhaPhrases in dependencies if it were to change

  return (
    <div className="hero-section-wrapper">
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
      {/* Image container on the right */}
      <div className="hero-image-container slide-in-right delay-400"> {/* Use slide-in-right animation */}
        <img
          src="/images/mainphoto.jpg" // **IMPORTANT: Replace with your actual professional photo filename**
          alt="Shobhit Verma Professional Photo"
          className="premanand-maharaj-image" // You can rename this class to 'professional-hero-image' for clarity
        />
        <p className="radha-text-container">
          {radhaCurrentText}
          <span className="typing-cursor radha-cursor">|</span> {/* Separate cursor for Radha Radha */}
        </p>
      </div>
    </div>
  );
}

export default Hero;