const mongoose = require('mongoose')

class Database {
  constructor() {
    this.init()
  }

  init() {
    mongoose.connect('mongodb+srv://app:MatheusPassword@cluster0.ut1xp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    mongoose.connection.on('connected', () => console.log('connected to database'))
    mongoose.connection.on('error', (err) => console.log(err))
  }
}

module.exports = new Database