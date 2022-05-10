const express = require('express')
const cors = require('cors')
const routes = require('./router')
require('./database')

class App {
  constructor() {
    this.server = express()
    
    // this.middlewares()
    this.routes()
    // this.cors()
  }

  // middlewares() {
  //   this.server.use(express.json())
  // }

  routes() {
    this.server.use(routes)
  }

  cors() {
    this.server.use(cors())
  }
}

module.exports = new App().server
