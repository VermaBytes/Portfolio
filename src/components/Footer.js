import React from 'react';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Shobhit Verma. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/VermaBytes" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* GitHub Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.207.683-.456 0-.227-.007-.75-.011-1.645-2.783.606-3.368-1.34-3.368-1.34-.455-1.157-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.53 2.342 1.085 2.91.829.091-.643.349-1.085.635-1.334-2.22-.253-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.03-2.68a3.618 3.618 0 01.096-2.656s.839-.269 2.75 1.026c.797-.223 1.654-.334 2.504-.337.85.003 1.707.114 2.504.337 1.91-1.295 2.749-1.026 2.749-1.026.046.24.116.634.096 2.656.64.696 1.03 1.589 1.03 2.68 0 3.841-2.339 4.686-4.562 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.416-.012 2.745 0 .252.179.547.688.455C21.137 20.195 24 16.447 24 12.017 24 6.484 19.522 2 14.023 2h-2.023z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/shobhit-verma-549744231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* LinkedIn Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;