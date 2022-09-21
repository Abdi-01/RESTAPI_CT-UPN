const db = require('./../Connection/Conn')

const queryGetUsers = async() => {
    try {
        let getUsers = await db.query('SELECT * FROM users')

        return { error: false, message: 'Success', isData: true, data: getUsers.rows }
    } catch (error) {
        return { error: true, message: error.message, isData: false, data: null }
    }
}

const queryPostUsers = async(req) => {
    try {
        await db.query('BEGIN')
        let {id, username, email, password, todoId, todo} = req.body 
        
        let insertUsers = await db.query('INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4) RETURNING id', [id, username, email, password])
        // id = todoId
        let insertTodos = await db.query('INSERT INTO todos (id, todo, users_id) VALUES ($1, $2, $3)', [todoId, todo, insertUsers.rows[0].id])

        await db.query('COMMIT')
        return { error: false, message: 'Success', isData: false, data: null }
    } catch (error) {
        await db.query('ROLLBACK')
        return { error: true, message: error.message, isData: false, data: null }
    }
}

module.exports = {
    queryGetUsers, queryPostUsers
}