const mongoose = require('mongoose')
const BagModel = require('../model/BagModel')

const yup = require('yup')

class BagController {
  async insert(req, res) {
    const { bag } = req.body

    const schema = yup.object().shape({
      name: yup.string().min(3).max(30).required(),
      price: yup.number().required(),
      quantity: yup.number().integer().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const createBag = await Promise.all(bag.map(async (item) => {
      const result = await BagModel.create(item)
      return result
    }))

    console.log(createBag);

    return res.status(200).json({ ok: true })
  }

  async getBag(_req, res) {
    const bag = await BagModel.find()

    return res.status(200).json({ bag })
  }

  async deleteItemBag(req, res) {
    const { id } = req.params
    console.log(id);
    const itemBag = await BagModel.findOne({ _id: id })
    console.log(itemBag)

    if (!itemBag) {
      return res.status(400).json({ message: 'id não encontrado' })
    }

    await BagModel.deleteOne(mongoose.Types.ObjectId(id))


    return res.status(200).json({ message: 'Deletado com sucesso' })
  }
}

module.exports = new BagController