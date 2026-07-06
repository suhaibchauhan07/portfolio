const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Portfolio Backend is running!')
})

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body
  
  console.log('Contact form submission:', { name, email, subject, message })
  
  res.json({ success: true, message: 'Message received successfully!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
