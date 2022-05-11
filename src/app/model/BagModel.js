const mongoose = require('mongoose')

const bagSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number },
})

const bag = mongoose.model('bag', bagSchema)

module.exports = bag
