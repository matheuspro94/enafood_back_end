const mongoose = require('mongoose')
const BagModel = require('../model/BagModel')

const yup = require('yup')

class BagController {
  async insert(req, res) {
    const { bag } = req.body

    const schema = yup.object({
      bag: yup.array(
        yup.object({
          name: yup.string().min(3).max(30).required(),
          price: yup.number().required(),
          quantity: yup.number().integer().required()
        })
      )
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falhou' })
    }

    const createBag = await Promise.all(bag.map(async (item) => {
      const result = await BagModel.create(item)
      return result
    }))

    return res.status(200).json({ ok: createBag })
  }

  async getBag(_req, res) {
    const bag = await BagModel.find()

    return res.status(200).json({ bag })
  }

  async updateQuantity(req, res) {
    const { id } = req.params
    const { quantity } = req.body

    const productExist = await BagModel.findOne({_id: mongoose.Types.ObjectId(id)})

    if(!productExist) {
      return res.status(400).json({ message: 'id não encontrado'})
    }
    
    await BagModel.updateOne(
      { _id: mongoose.Types.ObjectId(id)},
      {
        $set: { quantity }
      }
    )

    return res.status(200).json({ message: 'Quantity atualizado com sucesso'})
  }

  async deleteItemBag(req, res) {
    const { id } = req.params

    const itemBag = await BagModel.findOne({ _id: id })

    if (!itemBag) {
      return res.status(400).json({ message: 'id não encontrado' })
    }

    await BagModel.deleteOne(mongoose.Types.ObjectId(id))

    return res.status(200).json({ message: 'Deletado com sucesso' })
  }
}

module.exports = new BagController