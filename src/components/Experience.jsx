import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

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
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey
        </p>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <h4 className="timeline-company">{exp.company}</h4>

                <ul className="timeline-description">
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
