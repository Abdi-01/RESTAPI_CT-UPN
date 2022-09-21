const db = require('./../Connection/Conn')

const queryGetUsers = async() => {
    try {
        let getUsers = await db.query('SELECT * FROM users')

        return { error: false, message: 'Success', isData: true, data: getUsers.rows }
    } catch (error) {
        return { error: true, message: error.message, isData: false, data: null }
    }
}

module.exports = {
    queryGetUsers
}