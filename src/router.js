const { Router } = require('express')
const ProductController = require('./app/controllers/ProductController')
const BagController = require('./app/controllers/BagController')
const UserController = require('./app/controllers/UserController')

const routes = new Router()

routes.post('/users', UserController.create)

routes.get('/products', ProductController.getAllProducts)

routes.post('/bag', BagController.insert)
routes.get('/bag', BagController.getBag)
routes.put('/bag/:id', BagController.updateQuantity)
routes.delete('/bag/:id', BagController.deleteItemBag)

module.exports = routes