const mongoose = require('mongoose')

module.exports = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connect DB')
  } catch (error) {
    console.log(error)
  }
}
