const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  itens: [
    {
      type: String
    }
  ]
})

const product = mongoose.model('product', ProductSchema)

module.exports = product
