import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar /> {/* Render Navbar */}
      <main>
        <section id="home" className="hero-section">
          <Hero />
        </section>
        <section id="about" className="about-section">
          <About />
        </section>
        <section id="skills" className="skills-section">
          <Skills />
        </section>
        <section id="experience" className="experience-section">
          <Experience />
        </section>
        <section id="projects" className="projects-section">
          <Projects />
        </section>
        <section id="certifications" className="certifications-section">
          <Certifications />
        </section>
        <section id="contact" className="contact-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;