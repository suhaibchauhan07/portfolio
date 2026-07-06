import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h3 className="text-4xl font-black text-gradient mb-4">Suhaib Chauhan</h3>
          <p className="text-xl text-gray-400 mb-8">Full Stack MERN Developer</p>
          
          <div className="flex justify-center space-x-6 mb-10">
            <a 
              href="https://github.com/suhaibchauhan07" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:-translate-y-2"
            >
              <FiGithub className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/suhaib-chauhan-a90025327/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:-translate-y-2"
            >
              <FiLinkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:chauhansuhaib07@gmail.com" 
              className="p-4 rounded-2xl bg-white/5 hover:bg-gradient-to-br hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:-translate-y-2"
            >
              <FiMail className="w-7 h-7" />
            </a>
          </div>
          
          <p className="text-gray-500 text-lg">
            © {new Date().getFullYear()} Designed and Developed by Suhaib Chauhan
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
