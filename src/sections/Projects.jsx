import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'Online Aptitude Test Platform',
      description: 'A web-based platform that allows users to take aptitude tests online, view results instantly, and improve their preparation.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/aptitude.png',
      liveLink: 'https://online-aptitude-test-platform.vercel.app/',
      githubLink: 'https://github.com/suhaibchauhan07/Online-Aptitude-test-platform',
      featured: true
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Real-time messaging application that enables users to communicate instantly using WebSocket technology.',
      tech: ['React', 'Node.js', 'Express', 'Socket.IO'],
      image: '/chat-app.png',
      liveLink: 'https://chat-app-ten-mu-49.vercel.app/login',
      githubLink: 'https://github.com/suhaibchauhan07',
      featured: false
    },
      {
      title: 'Serenia Parfums – Perfume E-Commerce Platform',
      description: 'A modern perfume e-commerce platform that allows users to explore premium fragrances, view product details, and enjoy a seamless shopping experience through an elegant and responsive interface.',
      tech: ['React', 'Node.js', 'Express', 'Supabase', 'Tailwind CSS'],
      image: '/Serenia-Parfums.png',
      liveLink: 'https://serenia-parfums-frontend.onrender.com/',
      githubLink: 'https://github.com/suhaibchauhan07/serenia-parfums',
      featured: false
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
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold text-blue-500 text-center">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="reveal"
              style={{ transitionDelay: `${index * 0.2}s` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, rotateX: 2 }}
            >
              <div className="card-3d glass-effect rounded-3xl overflow-hidden group border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-bold text-sm">
                      <FiStar className="w-4 h-4" />
                      Featured
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 text-sm font-semibold rounded-full ${
                          i % 4 === 0 ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30' :
                          i % 4 === 1 ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30' :
                          i % 4 === 2 ? 'bg-pink-600/20 text-pink-400 border border-pink-600/30' :
                          'bg-cyan-600/20 text-cyan-400 border border-cyan-600/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/20 hover:border-blue-500 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <FiGithub className="w-5 h-5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
