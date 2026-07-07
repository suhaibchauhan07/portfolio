import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { FiTrash2, FiLoader, FiHome, FiMail, FiUser, FiFileText, FiCalendar, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase
        .from('contact')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setContacts(data)
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return

    setDeletingId(id)
    try {
      const { error } = await supabase
        .from('contact')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setContacts(prev => prev.filter(c => c.id !== id))
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setDeletingId(null)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  const stats = [
    { label: 'Total Messages', value: contacts.length, icon: <FiMail /> },
    { label: 'This Month', value: contacts.filter(c => new Date(c.created_at).getMonth() === new Date().getMonth()).length, icon: <FiCalendar /> }
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <Link 
              to="/" 
              className="flex items-center gap-2 px-6 py-3 glass-effect border border-white/10 hover:border-blue-500/30 rounded-2xl hover:bg-white/5 transition-all">
            <FiHome />
            Back to Home
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
                  <p className="text-3xl font-black">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Messages Section */}
        <div className="glass-effect rounded-3xl border border-white/10 p-6 md:p-8 overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-blue-500">Contact Messages</h2>
            <button 
              onClick={fetchContacts} 
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-white/20 hover:border-blue-500 rounded-xl hover:bg-white/5 transition-all">
              Refresh
            </button>
          </div>

          {error && (
            <div className="p-4 mb-6 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-300">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <FiLoader className="animate-spin w-12 h-12 text-blue-500 mb-4" />
              <p className="text-gray-400 text-lg">Loading messages...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <FiMail className="w-16 h-16 text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No messages yet</h3>
              <p className="text-gray-500">When someone sends you a message, it will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <FiUser />
                        Name
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <FiMail />
                        Email
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <FiFileText />
                        Subject
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        Date
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                      <td className="py-4 px-4 text-gray-200 font-semibold">{contact.name}</td>
                      <td className="py-4 px-4 text-gray-300">{contact.email}</td>
                      <td className="py-4 px-4 text-gray-300">{contact.subject}</td>
                      <td className="py-4 px-4 text-gray-400 text-sm">{formatDate(contact.created_at)}</td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => deleteContact(contact.id)}
                          disabled={deletingId === contact.id}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl transition-all disabled:opacity-50"
                        >
                          {deletingId === contact.id ? (
                            <FiLoader className="w-5 h-5 animate-spin" />
                          ) : (
                            <FiTrash2 className="w-5 h-5" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Message Details Expand? - Optional, but nice to have full message view! */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-400 mb-4">Message Previews:</h3>
                <div className="space-y-4">
                  {contacts.map(contact => (
                    <div key={contact.id} className="p-6 glass-effect border border-white/10 rounded-2xl">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-blue-400">{contact.subject}</h4>
                          <p className="text-sm text-gray-400">From: {contact.name} ({contact.email}) at {formatDate(contact.created_at)}</p>
                        </div>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          disabled={deletingId === contact.id}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all disabled:opacity-50"
                        >
                          {deletingId === contact.id ? (
                            <FiLoader className="w-4 h-4 animate-spin" />
                          ) : (
                            <FiTrash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-gray-300">{contact.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin
