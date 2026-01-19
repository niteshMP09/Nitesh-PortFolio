import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Hero.css'
import profileImage from '../assets/MyImage.png'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Nitesh Sikarwar</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer (React • Next.js • Node.js)</h2>
          <p className="hero-description">
            Full Stack Developer with 4+ years of experience building scalable web applications using
            React.js, Next.js, TypeScript, Node.js, and GraphQL. I focus on performance, clean UI
            architecture, and delivering responsive, accessible user experiences.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
              className="btn btn-primary"
            >
              Get In Touch
            </button>

            <button
              onClick={() =>
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }
              className="btn btn-secondary"
            >
              View Projects
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/niteshMP09" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nitesh-sikarwar-a3b0561a0/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:niteshsikarwar4898@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <img src={profileImage} alt="Nitesh Sikarwar" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
