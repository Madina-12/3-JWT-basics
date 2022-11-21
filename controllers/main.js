const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const login = async (req,res) =>{
    const {username, password} = req.body
    if (!username || !password) {
        throw new BadRequest('Please provide username and password')
    }
    const id = new Date().getMilliseconds()
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req,res) =>{
    // console.log(req.user);
    res.status(200).json({
        msg: `Salam ${req.user.username}`,
        secret: `What is meant by authorized data.`
    })
}
module.exports = {login, dashboard}