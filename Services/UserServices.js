const db = require('./../models/index')
const users = db.users
const useraddress = db.useraddress

const { sequelize } = require('./../models')

const queryPostUsers = async(req) => {
    const t = await sequelize.transaction() 
    try {
        let {username, email, password, consignee, address} = req.body

        let postUsers = await users.create({username, email, password}, {transaction: t})
        let userId = postUsers.dataValues.id
        let postUserAddress = await useraddress.create({consignee, address, userId},  {transaction: t})
        
        await t.commit()
        return { error: false, message: 'Success', isData: false, data: null }     
    } catch (error) {
        await t.rollback()
        return { error: true, message: error.message, isData: false, data: null }
    }
}

const queryGetUsers = async(req) => {
    try {
        let getUser = await users.findAll({ where: { username: req.body.username, password: req.body.password } })
        
        if(getUser.length === 1) return { error: false, message: 'Login Success', isData: false, data: null }
        return { error: true, message: 'Login Failed', isData: false, data: null }
    } catch (error) {
        return { error: true, message: error.message, isData: false, data: null }
    }
}

module.exports = {
    queryPostUsers, queryGetUsers
}