import React, { useEffect } from 'react'
import { FiAward, FiTarget, FiCode, FiHeart } from 'react-icons/fi'

const About = () => {
  const aboutItems = [
    {
      icon: <FiAward className="w-7 h-7" />,
      title: 'MERN Stack Developer',
      content: 'Building full-stack applications with React, Node.js, Express, and MongoDB',
      gradient: 'from-blue-600 to-purple-600',
      border: 'hover:border-blue-500/30'
    },
    {
      icon: <FiTarget className="w-7 h-7" />,
      title: 'Career Objective',
      content: 'To contribute to impactful software products while growing as a developer',
      gradient: 'from-purple-600 to-pink-600',
      border: 'hover:border-purple-500/30'
    },
    {
      icon: <FiCode className="w-7 h-7" />,
      title: 'Full Stack Development',
      content: 'Learning and building with modern web technologies',
      gradient: 'from-pink-600 to-rose-600',
      border: 'hover:border-pink-500/30'
    },
    {
      icon: <FiHeart className="w-7 h-7" />,
      title: 'Interests',
      content: 'Web Development, Problem Solving, Open Source',
      gradient: 'from-cyan-600 to-blue-600',
      border: 'hover:border-cyan-500/30'
    }
  ]

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

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold text-blue-500 text-center">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  I am a Computer Science Engineering student with a strong interest in full-stack web development. I enjoy building modern web applications and continuously improving my skills in React, Node.js, Express.js, and database technologies. My goal is to contribute to impactful software products while growing as a developer.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aboutItems.map((item, index) => (
              <div 
                key={index} 
                className="reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`card-3d glass-effect rounded-2xl p-6 ${item.border} transition-all duration-500 border border-white/10`}>
                  <div className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
