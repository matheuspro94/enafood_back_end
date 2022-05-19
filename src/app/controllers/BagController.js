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
    const { userId } = req
    const createBag = await Promise.all(bag.map(async (item) => {
      const { name, price, quantity } =  item
      const result = await BagModel.create({ name, price, quantity, userId })
      return result
    }))

    return res.status(200).json({ ok: createBag })
  }

  async getBag(req, res) {
    const { userId } = req
    const bag = await BagModel.find({ userId })

    return res.status(200).json({ bag })
  }

  async updateQuantity(req, res) {
    const { id } = req.params
    const { quantity } = req.body
    const { userId } = req

    const productExist = await BagModel.findOne({_id: mongoose.Types.ObjectId(id)})
    console.log(userId);

    console.log(productExist.userId);

    
    if(!productExist) {
      return res.status(400).json({ message: 'id não encontrado'})
    }
    
    if (userId !== productExist.userId) {
      return res.status(401).json({ message: 'Usuário não autorizado'})
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