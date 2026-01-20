import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Nitesh Sikarwar</h3>
            <p className="text-slate-400 leading-relaxed">
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

          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/niteshMP09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nitesh-sikarwar-a3b0561a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-400 pt-8 border-t border-slate-800">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Nitesh Sikarwar <FaHeart className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
