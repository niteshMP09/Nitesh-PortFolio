import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a Full Stack Developer with 4+ years of experience building modern web
              applications using JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js,
              and GraphQL. I enjoy creating scalable, user-centric products with clean UI and
              strong performance.
            </p>
            <p className="about-paragraph">
              I specialize in responsive and accessible frontend development, optimizing Core Web
              Vitals through lazy loading, code splitting, and efficient component patterns. I’ve
              also worked on design systems, reusable component libraries, and Storybook
              documentation to maintain consistency across teams.
            </p>
            <p className="about-paragraph">
              I’ve worked in Agile environments with TDD practices, collaborating closely with
              product, design, backend, and QA teams to deliver reliable features. I’m always
              improving my skills and exploring new tools to build faster, better experiences.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Reusable Components Built</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">Major Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
