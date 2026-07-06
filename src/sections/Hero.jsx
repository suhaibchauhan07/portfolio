import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiExternalLink } from 'react-icons/fi'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const toRotate = ['MERN Stack Developer']
  const period = 2000

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => clearInterval(ticker)
  }, [text, isDeleting])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (!isDeleting && updatedText === fullText) {
      setTypingSpeed(period)
      setIsDeleting(true)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(500)
    } else {
      setTypingSpeed(isDeleting ? 50 : 150)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Orbs */}
      <div className="bg-orb absolute w-96 h-96 bg-blue-600/30 top-1/4 left-1/4 animate-float"></div>
      <div className="bg-orb absolute w-80 h-80 bg-purple-600/30 bottom-1/4 right-1/4 animate-float2"></div>
      <div className="bg-orb absolute w-64 h-64 bg-pink-600/30 top-1/2 right-1/3 animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-6xl md:text-7xl font-bold text-blue-500 text-center">Suhaib Chauhan</span>     
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              <span className="text-2xl font-bold text-blue-500 text-center">{text}</span>           
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Passionate Computer Science Engineering student focused on building scalable and user-friendly web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
            >
              View Projects
              <FiExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-10 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-origin-border text-white font-bold rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
            >
              Contact Me
              <FiMail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* Update href to your actual resume file path once you add it! */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 border-2 border-white/20 text-gray-300 hover:text-white hover:bg-white/10 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
            >
              My Resume
              <FiExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-3 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
