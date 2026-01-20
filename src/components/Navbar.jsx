import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-[1000] py-4 shadow-lg shadow-black/30">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        <div className="nav-logo">
          <h2 className="text-2xl font-bold gradient-text">Nitesh Sikarwar</h2>
        </div>
        
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 md:items-center absolute md:relative top-full md:top-auto left-0 w-full md:w-auto bg-slate-900/95 md:bg-transparent p-8 md:p-0`}>
          <a onClick={() => scrollToSection('home')} className="text-slate-300 font-medium cursor-pointer transition-all duration-300 hover:text-indigo-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">Home</a>
          <a onClick={() => scrollToSection('about')} className="text-slate-300 font-medium cursor-pointer transition-all duration-300 hover:text-indigo-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a onClick={() => scrollToSection('skills')} className="text-slate-300 font-medium cursor-pointer transition-all duration-300 hover:text-indigo-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="text-slate-300 font-medium cursor-pointer transition-all duration-300 hover:text-indigo-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">Projects</a>
          <a onClick={() => scrollToSection('experience')} className="text-slate-300 font-medium cursor-pointer transition-all duration-300 hover:text-indigo-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">Experience</a>
          <a onClick={() => scrollToSection('contact')} className="text-slate-300 font-medium cursor-pointer transition-all duration-300 hover:text-indigo-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          <button
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 rounded-lg font-semibold gradient-bg text-white shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/60"
            >
              Get In Touch
            </button>
        </div>

        <div className="text-2xl text-slate-100 cursor-pointer z-[1001] md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
