import React, { useEffect } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi'

const Experience = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    
    const checkReveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (elementTop < windowHeight - 100) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', checkReveal)
    checkReveal()
    
    return () => window.removeEventListener('scroll', checkReveal)
  }, [])

  const responsibilities = [
    'Developed scalable web applications using MongoDB, Express.js, React.js, and Node.js to solve real-world problems.',
    'Integrated backend APIs with React.js to create dynamic and responsive user interfaces.',
    'Worked with frontend technologies alongside backend services to build user-friendly and interactive applications.',
    'Collaborated with cross-functional teams to design, implement, and optimize full-stack solutions for seamless user experiences.'
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold text-blue-500 text-center">Experience</h2>
        </div>

        <div className="reveal">
          <div className="card-3d glass-effect rounded-3xl p-8 md:p-12 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                  <FiBriefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Web Development Intern</h3>
                  <p className="text-gray-400">CodSoft</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white">
                  <FiCalendar className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Duration</h3>
                  <p className="text-gray-400">07/2024 – 10/2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center text-white">
                  <FiMapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mode</h3>
                  <p className="text-gray-400">Virtual</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold mb-6 text-gradient">Key Responsibilities:</h4>
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <FiCheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
