const About = () => {
  return (
    <section id="about" className="bg-slate-800 py-20">
      <div className="max-w-[1200px] mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">About Me</h2>
        <div className="about-content">
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm a Full Stack Developer with 4+ years of experience building modern web
              applications using JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js,
              and GraphQL. I enjoy creating scalable, user-centric products with clean UI and
              strong performance.
            </p>
            <p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-slate-900 p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
              <h3 className="text-5xl font-bold gradient-text mb-2">4+</h3>
              <p className="text-slate-400">Years Experience</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
              <h3 className="text-5xl font-bold gradient-text mb-2">50+</h3>
              <p className="text-slate-400">Reusable Components Built</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
              <h3 className="text-5xl font-bold gradient-text mb-2">4+</h3>
              <p className="text-slate-400">Major Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
