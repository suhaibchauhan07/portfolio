import React, { useState, useEffect } from 'react'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { supabase } from '../lib/supabase'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const { error } = await supabase
        .from('contact')
        .insert([formData])
      
      if (error) throw error

      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (err) {
      console.error(err)
      setIsSubmitting(false)
      setSubmitError(err.message)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail className="w-7 h-7" />,
      title: 'Email',
      value: 'chauhansuhaib07@gmail.com',
      link: 'mailto:chauhansuhaib07@gmail.com',
      gradient: 'from-blue-600 to-purple-600',
      border: 'hover:border-blue-500/30'
    },
    {
      icon: <FiGithub className="w-7 h-7" />,
      title: 'GitHub',
      value: 'github.com/suhaibchauhan07',
      link: 'https://github.com/suhaibchauhan07',
      gradient: 'from-purple-600 to-pink-600',
      border: 'hover:border-purple-500/30'
    },
    {
      icon: <FiLinkedin className="w-7 h-7" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/suhaib-chauhan-a90025327',
      link: 'https://www.linkedin.com/in/suhaib-chauhan-a90025327/',
      gradient: 'from-pink-600 to-rose-600',
      border: 'hover:border-pink-500/30'
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
    checkReveal() // Check on initial load
    
    return () => window.removeEventListener('scroll', checkReveal)
  }, [])

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold text-blue-500 text-center">Get InTouch</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal">
            <h3 className="text-3xl font-black mb-6">Let's Connect!</h3>
            <p className="text-gray-400 mb-10 text-lg">
              Feel free to reach out to me for any opportunities, collaborations, or just a friendly chat!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.title !== 'Email' ? '_blank' : '_self'}
                  rel={info.title !== 'Email' ? 'noopener noreferrer' : ''}
                  className={`card-3d flex items-center gap-4 p-6 glass-effect rounded-2xl ${info.border} transition-all duration-300`}
                >
                  <div className={`p-4 bg-gradient-to-br ${info.gradient} rounded-xl text-white`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-lg">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-300">
                        {submitError}
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-dark-700/50 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-dark-700/50 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-dark-700/50 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-200"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 bg-dark-700/50 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-200 resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
