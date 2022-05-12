const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  password_hash: { type: String },
})

const user = mongoose.model('user', userSchema)

module.exports = user