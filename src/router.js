const { Router } = require('express')

const routes = new Router()

routes.get('/hello', (req, res) => {
  return res.send('Hello Word!')
})

module.exports = routes