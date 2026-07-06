import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

const Education = () => {
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
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold text-blue-500 text-center">
            <span>Education</span>
          </h2>
        </div>

        <div className="reveal">
          <div className="glass-effect rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-blue-500"
              >
                <FiAward className="w-12 h-12" />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-2 text-white">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-lg text-gray-300 mb-1">
                  Seth Jai Prakash Mukand Lal Institute of Engineering & Technology (JMIT), Radaur
                </p>
                <p className="text-gray-500">
                  2022 – 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
