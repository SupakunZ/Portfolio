const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/connectDB')
const contactModel = require('./models/contactModel')


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
connectDB()


app.listen(5000, () => {
  console.log('Server is running on port 5000')
})


// Route
app.post('/contact', async (req, res) => {

  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  await contactModel.insertMany(data)
  res.send('success')
})
