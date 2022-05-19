const UserModel = require('../model/UserModel')
const yup = require('yup')
const bcrypt = require('bcryptjs')

class UserController {
  async create(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    
    const userExists = await UserModel.findOne({ email: req.body.email })

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    
    const { _id: id, name, email, password} = req.body

    const hash = await bcrypt.hash(password, 8)

    await UserModel.create({ _id: id, name, email, password_hash: hash })

    return res.status(200).json({
      _id: id,
      name,
      email
    })
  }

  async getAllUser(req, res) {
    const users = await UserModel.find()
    
    return res.status(200).json(users)
  }
}

module.exports = new UserController