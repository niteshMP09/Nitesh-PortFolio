import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { threshold: 0.55 }
    )

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-[1000] border-b border-indigo-500/20 bg-slate-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.55)]">
      <div className="max-w-[1200px] mx-auto px-5 h-[76px] flex justify-between items-center">
        <div className="nav-logo">
          <button
            onClick={() => scrollToSection('home')}
            className="text-left text-2xl font-bold gradient-text tracking-wide transition-transform duration-300 hover:scale-[1.02]"
          >
            Nitesh Sikarwar
          </button>
        </div>

        <div className="hidden md:flex md:flex-row md:gap-2 md:items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative text-left md:text-center px-3 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-slate-800/70 md:bg-transparent'
                    : 'text-slate-300 hover:text-indigo-300 hover:bg-slate-800/60 md:hover:bg-transparent'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-3 right-3 bottom-[4px] h-[2px] rounded-full gradient-bg transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </button>
            )
          })}

          <button
            onClick={() => scrollToSection('contact')}
            className="ml-3 px-6 py-2.5 rounded-lg font-semibold gradient-bg text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/50 active:scale-95"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-indigo-500/30 bg-slate-800/70 text-2xl text-slate-100 cursor-pointer z-[1001] transition-all duration-300 hover:bg-slate-700/80 hover:text-indigo-300"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+10px)] right-4 w-[min(22rem,calc(100vw-2rem))] flex flex-col gap-4 bg-slate-900/95 border border-indigo-500/20 rounded-2xl p-5 shadow-xl shadow-black/40 transition-all duration-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative text-left px-3 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-slate-800/70'
                    : 'text-slate-300 hover:text-indigo-300 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-3 right-3 bottom-[4px] h-[2px] rounded-full gradient-bg transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </button>
            )
          })}

          <button
            onClick={() => scrollToSection('contact')}
            className="mt-1 px-6 py-2.5 rounded-lg font-semibold gradient-bg text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/50 active:scale-95"
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
