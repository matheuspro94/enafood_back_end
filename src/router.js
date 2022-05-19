const { Router } = require('express')
const ProductController = require('./app/controllers/ProductController')
const BagController = require('./app/controllers/BagController')
const UserController = require('./app/controllers/UserController')
const LoginController = require('./app/controllers/LoginController')
const authMiddleware = require('./app/middleware/auth')

const routes = new Router()


routes.post('/users', UserController.create)

routes.post('/login', LoginController.login)

routes.get('/products', ProductController.getAllProducts)

routes.post('/bag', authMiddleware, BagController.insert)
routes.get('/bag', authMiddleware, BagController.getBag)
routes.put('/bag/:id', authMiddleware, BagController.updateQuantity)
routes.delete('/bag/:id', authMiddleware, BagController.deleteItemBag)

module.exports = routes