const mongoose = require('mongoose')

module.exports = async (req, res) => {
  try {
    await mongoose.connect('mongodb://localhost:27017/contact_port')
    console.log('Connect DB')
  } catch (error) {
    console.log(error)
  }
}
