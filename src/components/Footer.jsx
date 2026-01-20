import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Nitesh Sikarwar</h3>
            <p className="footer-text">
              Full Stack Developer specializing in React, Next.js, TypeScript, and scalable web applications.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/niteshMP09" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/nitesh-sikarwar-a3b0561a0/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Nitesh Sikarwar <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
