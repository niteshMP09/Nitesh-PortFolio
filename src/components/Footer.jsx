import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Nitesh Sikarwar</h3>
            <p className="footer-text">
              Full Stack Developer with strong expertise in React, Next.js, and
              TypeScript, focused on building scalable, high-performance web
              applications that deliver real business value. I enjoy creating
              clean, responsive, and accessible user interfaces while
              maintaining a solid foundation in backend development, API
              integration, and database-driven features. I have experience
              working with modern frontend architecture, reusable component
              design, state management, and performance optimization to ensure
              smooth and fast user experiences across devices. I’m comfortable
              collaborating with teams, translating requirements into reliable
              solutions, and writing maintainable code that scales as products
              grow. My approach includes strong attention to detail, debugging
              complex issues, and continuously improving application quality
              through testing and best practices. I’m passionate about modern
              web development, learning new technologies, and delivering
              features that are secure, efficient, and user-friendly. Whether
              it’s building dashboards, authentication flows, data-heavy pages,
              or real-time updates, I focus on creating stable and polished
              applications that users trust and enjoy.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a
                href="https://github.com/niteshMP09"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nitesh-sikarwar-a3b0561a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
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
  );
};

export default Footer;
