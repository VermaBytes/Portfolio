import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h2 className="section-title fade-in delay-100">Get In Touch</h2>
      <div className="contact-layout">
        <div className="contact-form-container slide-in-left delay-300">
          <h3>
            Send me a message
          </h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-details-container slide-in-right delay-400">
          <h3>
            Contact Details
          </h3>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 13a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v14z" />
              </svg>
              <span>{`vermashobhit616@gmail.com`}</span>
            </li>
            <li className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{`+91-8381900990`}</span>
            </li>
            <li className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-info-icon" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn Icon SVG */}
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a href="https://www.linkedin.com/in/shobhit-verma-b33a7820a/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;