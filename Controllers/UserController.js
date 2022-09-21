const db = require('./../Connection/Conn')

// Import Service
const { queryPostUsers } = require('./../Services/UserServices')

module.exports = {
    getUsers: async(req, res) => {
        try {
            let getUsers = await db.query('SELECT * FROM users')
            
            res.status(201).send({
                error: false,
                message: 'Success',
                isData: true,
                data: getUsers.rows
            })
        } catch (error) {
            res.status(500).send({
                error: true, 
                message: 'Failed',
                isData: false, 
                data: null
            })
        }
    },

    // getUsers: async(req, res) => {
    //     try {
    //         let result = await queryGetUsers()
            
    //         if(result.error) throw result

    //         res.status(201).send({
    //             error: result.error,
    //             message: result.message,
    //             isData: result.isData,
    //             data: result.data
    //         })
    //     } catch (error) {
    //         res.status(500).send({
    //             error: error.error, 
    //             message: error.message,
    //             isData: error.isData, 
    //             data: error.data
    //         })
    //     }
    // }

    createUsers: async(req, res) => {
        try {
           
            let result = await queryPostUsers(req)
            if(result.error) throw result
            res.status(201).send({
                error: result.error, 
                message: result.message,
                isData: result.isData,
                data: result.data
            })
        } catch (error) {
            res.status(500).send({
                error: error.error, 
                message: error.message,
                isData: error.isData,
                data: error.data
            })
        }
    },

    updateUsers: async(req, res) => {
        try {
            
            let findUser = await db.query(`SELECT * FROM users WHERE id=${parseInt(req.params.id)}`)
            if(findUser.rows.length === 0) throw { message: 'User Not Found!' }

            let updateUser = await db.query('UPDATE users SET username=$1 WHERE id=$2', [req.body.username, parseInt(req.params.id)])
            
            res.status(201).send({
                error: false, 
                message: 'Success',
                isData: false,
                data: null
            })

        } catch (error) {
            res.status(500).send({
                error: true, 
                message: error.message,
                isData: false,
                data: null
            })
        }
    }
}