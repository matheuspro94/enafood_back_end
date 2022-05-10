const seeder = require('mongoose-seed')
const productModel = require('../model/productSchema')

const DB = 'mongodb+srv://app:MatheusPassword@cluster0.ut1xp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

seeder.connect(DB, () => {
  seeder.loadModels([productModel])

  seeder.clearModels(['product'], () => {
    seeder.populateModels(data, (err) => {
      if (err) {
        return console.log('>>> seed err', err)
      }

      seeder.disconnect()
    })
  })
})

const data = [
  {
    'model': 'product',
    'documents': [
      {
        'name': 'x-tudo',
        'price': 11.99,
        'itens': ['tomate', 'pão', 'Hamburquer', 'alface', 'ovo', 'bacon']
      },
      {
        'name': 'x-burger',
        'price': 11.99,
        'itens': ['tomate', 'pão', 'Hamburquer', 'alface']
      },
    ]
  }
]