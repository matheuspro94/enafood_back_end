const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number},
  itens: [
    {
      type: String
    }
  ]
})

const product = mongoose.model('product', ProductSchema, 'Product')

module.exports = product
