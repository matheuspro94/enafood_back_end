const UserModel = require('../model/UserModel')
const yup = require('yup')

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

    const { _id: id, name, email } = await UserModel.create(req.body)

    return res.status(200).json({
      _id: id,
      name,
      email
    })
  }
}

module.exports = new UserController