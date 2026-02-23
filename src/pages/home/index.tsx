import { useState } from 'react'
import { portfolioData } from '../../utils/helpers'
import { Moon, Sun, Github, Mail, ExternalLink } from 'lucide-react'

const Home = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)

  // Theme classes
  const bgColor = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-white' : 'text-black'
  const secondaryText = isDark ? 'text-gray-400' : 'text-gray-600'
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-200'
  const cardBg = isDark ? 'bg-black' : 'bg-white'
  const hoverBg = isDark ? 'hover:bg-gray-900' : 'hover:bg-gray-50'

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bgColor} ${textColor}`}>
      {/* Header with theme toggle */}
      <header className={`sticky top-0 z-50 border-b ${borderColor} backdrop-blur-sm bg-opacity-95`}>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='text-sm font-mono text-gray-500'>
            &lt;/portfolio&gt;
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label='Toggle theme'
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className='max-w-6xl mx-auto px-6 py-12'>
        {/* Hero section */}
        <section className='mb-20'>
          <div className='flex flex-col gap-8 md:flex-row md:items-end md:gap-12'>
            {/* Avatar */}
            <div className='shrink-0'>
              <div
                className={`w-32 h-32 rounded-full overflow-hidden border-2 ${borderColor} ${isDark ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-center text-4xl font-bold ${textColor}`}
              >
                {portfolioData.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            </div>

            {/* Hero text */}
            <div className='flex-1'>
              <h1 className='text-4xl lg:text-5xl font-bold mb-2 tracking-tight'>&lt;{portfolioData.name}&gt;</h1>
              <p className={`text-xl font-light ${secondaryText} mb-4`}>// {portfolioData.title}</p>
              <p className={`text-sm font-mono ${secondaryText}`}>📍 {portfolioData.location}</p>
            </div>
          </div>
        </section>

        {/* Quick contact bar */}
        <section className={`mb-20 p-6 rounded-lg border ${borderColor} ${cardBg} flex flex-wrap gap-6 justify-between items-center`}>
          <a
            href={`mailto:${portfolioData.email}`}
            className='flex items-center gap-2 hover:text-gray-500 transition-colors'
          >
            <Mail size={18} />
            <span className='text-sm'>{portfolioData.email}</span>
          </a>
          <a
            href={portfolioData.github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:text-gray-500 transition-colors'
          >
            <Github size={18} />
            <span className='text-sm'>github</span>
          </a>
        </section>

        {/* About section */}
        <section className='mb-20'>
          <h2 className='text-xl font-mono mb-6 text-gray-500'>//about</h2>
          <p className={`leading-relaxed text-lg ${secondaryText} font-light`}>{portfolioData.aboutText}</p>
        </section>

        {/* Experience section */}
        <section className='mb-20'>
          <h2 className='text-xl font-mono mb-8 text-gray-500'>//work_experience</h2>
          <div className='space-y-12'>
            {portfolioData.experience.map((exp) => (
              <div key={exp.id} className='grid grid-cols-12 gap-6'>
                {/* Time - 3/12 */}
                <div className='col-span-12 md:col-span-3'>
                  <span className={`text-sm font-mono ${secondaryText}`}>{exp.period}</span>
                </div>
                {/* Content - 9/12 */}
                <div className='col-span-12 md:col-span-9'>
                  <div className='p-2 border border-gray-900 flex items-center gap-2 w-fit mb-2'>
                    <h3 className='text-lg font-semibold'>{exp.company}</h3>
                    <p className={`text-sm ${secondaryText}`}>//{exp.role}</p>
                  </div>

                  <ul className='space-y-3'>
                    {exp.description.map((item, idx) => (
                      <li key={idx} className={`flex gap-3 text-sm ${secondaryText}`}>
                        <span className='text-gray-500 flex-shrink-0'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects section */}
        <section className='mb-20'>
          <h2 className='text-xl font-mono mb-8 text-gray-500'>//projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {portfolioData.projects.map((project) => (
              <a
                key={project.id}
                href={project.link || '#'}
                className={`group p-6 rounded-lg border-2 ${borderColor} ${cardBg} ${hoverBg} transition-all duration-300 hover:border-gray-600 cursor-pointer`}
              >
                <div className='flex items-start justify-between mb-3'>
                  <h3 className='text-lg font-semibold'>{project.title}</h3>
                  <ExternalLink size={18} className='opacity-0 group-hover:opacity-100 transition-opacity' />
                </div>
                <p className={`text-sm mb-4 ${secondaryText}`}>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded font-mono ${isDark ? 'bg-gray-900 text-gray-500 border border-gray-800' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-12 border-t ${borderColor} text-center ${secondaryText} text-sm`}>
          <p>crafted with typescript & tailwind</p>
        </footer>
      </main>
    </div>
  )
}

export default Home