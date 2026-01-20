import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experienceData = [
    {
      title: 'Software Engineer',
      company: 'Hotbit Infosoft LLP, Indore',
      period: 'July 2024 - Present',
      description: [
        'Spearheaded scalable UI architecture using React.js 18+, Next.js 15 App Router, TypeScript strict mode, and React Server Components for better SSR performance.',
        'Built 50+ reusable responsive components following Atomic Design with Tailwind CSS, Headless UI, and design tokens to maintain design consistency.',
        'Optimized Core Web Vitals using React.lazy, memoization patterns, Next.js Image optimization, bundle analysis, and caching improvements.'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Webkorps Services India Pvt Ltd, Indore',
      period: 'April 2022 - July 2024',
      description: [
        'Improved React app performance using React.memo, useCallback/useMemo, code splitting with React.lazy, and virtualized lists (faster load times and higher engagement).',
        'Built modular components and integrated GraphQL APIs for seamless data communication with real-time filtering, sorting, and form workflows.',
        'Led TypeScript migration across 50+ components with strict typing, generics, and utility types to reduce runtime errors and improve developer productivity.'
      ]
    },
    {
      title: 'Trainee Software Developer',
      company: 'Ypsilon IT Solutions Pvt Ltd, Indore',
      period: 'October 2021 - March 2022',
      description: [
        'Contributed to a full-stack MERN project by building responsive React.js components and backend APIs using Node.js, Express.js, and MongoDB.',
        'Developed interactive, pixel-perfect websites using JavaScript ES6+ and reusable component architecture with clean state management patterns.',
        'Created fully responsive layouts using CSS3 Flexbox, media queries, and cross-browser testing for consistent UX across devices.'
      ]
    }
  ]

  return (
    <section id="experience" className="bg-slate-900 py-20">
      <div className="max-w-[1200px] mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Work Experience</h2>
        <p className="text-center text-slate-300 text-lg mb-12">
          My professional journey
        </p>

        <div className="relative">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <FaBriefcase />
              </div>
              <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-700 last:hidden"></div>

              <div className="bg-slate-800 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-100">{exp.title}</h3>
                  <span className="text-sm text-indigo-400 font-medium">{exp.period}</span>
                </div>

                <h4 className="text-lg text-slate-300 mb-4">{exp.company}</h4>

                <ul className="space-y-2 text-slate-400 list-disc list-inside">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
