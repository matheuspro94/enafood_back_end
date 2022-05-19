const ProductModel = require('../model/ProductModel')

class ProductController {
  async getAllProducts(_req, res) {
    const allProducts = await ProductModel.find()

    return res.status(200).json(allProducts)
  }
}

module.exports = new ProductController