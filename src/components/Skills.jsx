import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiExpress, SiNextdotjs, SiGraphql, SiRedux, SiJest } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
    { name: 'React.js', icon: <FaReact />, level: 90 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
    { name: 'Express.js', icon: <SiExpress />, level: 80 },
    { name: 'GraphQL', icon: <SiGraphql />, level: 80 },
    { name: 'Redux (Saga/Thunk/Toolkit)', icon: <SiRedux />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
    { name: 'Jest + React Testing Library', icon: <SiJest />, level: 75 },
    { name: 'AWS (SDK)', icon: <FaAws />, level: 70 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
    { name: 'SQL', icon: <FaDatabase />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Docker', icon: <FaDocker />, level: 65 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies I use to build scalable, high-performance web applications
        </p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
