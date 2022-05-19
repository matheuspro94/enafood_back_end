const User = require('../../app/model/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../../config/auth')

class LoginController {
  async login(req, res) {
    const { email, password } = req.body

    const user = await User.findOne().where('email', email)

    if (user) {
      const validPass = await bcrypt.compare(password, user.password_hash)

      if (validPass) {
        const { id, name } = user
        return res.status(200).json({
          user:
          {
            _id: id,
            name,
            email
          },
          token: jwt.sign({ id }, auth.secret, {
            expiresIn: auth.expiresIn,
          }), 
      })
    } else {
      return res.json({ error: 'Wrong password.' })
    }
  } else {
  return res.status(401).json({ error: 'User not found.' })
}
  }
}

module.exports = new LoginController