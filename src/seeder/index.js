const mongoose = require('mongoose')
const productSchema = require('../model/productSchema')
const product = require('../data/products')

const uri = 'mongodb+srv://app:MatheusPassword@cluster0.ut1xp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(uri)
  .then(() => {
    console.log('Mongo connection Open')
  })
  .catch((err) => {
    console.log(err)
  })

const seedDB = async () => {
  await productSchema.deleteMany({})
  await productSchema.insertMany(product)
  console.log('Data imported')
}

seedDB().then(() => {
  mongoose.connection.close()
})

