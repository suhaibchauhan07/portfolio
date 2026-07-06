import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'text-blue-500',
      skills: [
        'React.js',
        'JavaScript',
        'HTML',
        'CSS'
      ]
    },
    {
      title: 'Database Management',
      color: 'text-blue-500',
      skills: [
        'MongoDB',
        'SQL',
        'Supabase'        
      ]
    },
    {
      title: 'Backend',
      color: 'text-blue-500',
      skills: [
        'Node.js',
        'Express.js',        
        'REST APIs',
        'Socket.IO',
        'JWT Auth'
      ]
    },
     {
      title: 'Programming Languages',
      color: 'text-blue-500',
      skills: [
        'C',
        'C++'
      ]
    },
     {
      title: 'Core Concepts',
      color: 'text-blue-500',
      skills: [
        'OOPs',
        'Data Structures & Algorithms'
        
      ]
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
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold text-blue-500 text-center">
            <span>Skills</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="reveal"
              style={{ transitionDelay: `${catIndex * 0.15}s` }}
            >
              <div className="card-3d glass-effect rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className={`text-xl font-black mb-8 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="skill-pill px-5 py-2.5 rounded-2xl text-gray-300 font-semibold"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
