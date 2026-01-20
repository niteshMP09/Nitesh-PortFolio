import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa'
import profileImage from '../assets/MyImage.png'
import resume from '../assets/Nitesh_CV.pdf'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-[70px] bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="animate-[fadeInUp_1s_ease-out] order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="gradient-text">Nitesh Sikarwar</span>
          </h1>
          <h2 className="text-3xl text-white mb-6 font-semibold">
            Full Stack Developer (React • Next.js • Node.js)
          </h2>
          <p className="text-white text-lg leading-relaxed mb-8">
            Full Stack Developer with 4+ years of experience building scalable web applications using
            React.js, Next.js, TypeScript, Node.js, and GraphQL. I focus on performance, clean UI
            architecture, and delivering responsive, accessible user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
              className="px-4 py-2 rounded-lg font-semibold gradient-bg text-white shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/60"
            >
              Get In Touch
            </button>

            <a
              href={resume}
              download="Nitesh_Sikarwar_Resume.pdf"
              className="px-4 py-2 rounded-lg font-semibold bg-transparent text-slate-100 border-2 border-indigo-500 shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-105 flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>

            <button
              onClick={() =>
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }
              className="px-4 py-2 rounded-lg font-semibold bg-transparent text-slate-100 border-2 border-indigo-500 shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-105"
            >
              View Projects
            </button>
          </div>

          <div className="flex gap-4 mb-4 justify-center md:justify-start">
            <a href="https://github.com/niteshMP09" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-300 transition-all duration-300 hover:text-indigo-400 hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nitesh-sikarwar-a3b0561a0/" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-300 transition-all duration-300 hover:text-indigo-400 hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="mailto:niteshsikarwar4898@gmail.com" className="text-3xl text-slate-300 transition-all duration-300 hover:text-indigo-400 hover:scale-110">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center animate-[fadeIn_1s_ease-out] order-1 md:order-2">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-slate-900"></div>
            <img src={profileImage} alt="Nitesh Sikarwar" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
