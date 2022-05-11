const { Router } = require('express')
const ProductController = require('./app/controllers/ProductController')
const BagController = require('./app/controllers/BagController')

const routes = new Router()

routes.get('/products', ProductController.getAllProducts)

routes.post('/bag', BagController.insert)
routes.get('/bag', BagController.getBag)
routes.delete('/bag/:id', BagController.deleteItemBag)

module.exports = routes