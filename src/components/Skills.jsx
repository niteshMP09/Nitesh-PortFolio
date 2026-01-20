import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiExpress, SiNextdotjs, SiGraphql, SiRedux, SiJest } from 'react-icons/si'

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
    <section id="skills" className="bg-slate-900 py-20">
      <div className="max-w-[1200px] mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Skills & Technologies</h2>
        <p className="text-center text-white text-lg mb-12">
          Technologies I use to build scalable, high-performance web applications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
              <div className="text-5xl text-indigo-400 mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">{skill.name}</h3>

              <div className="w-full bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <span className="text-sm text-slate-400">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
