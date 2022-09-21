const db = require('./../Connection/Conn')

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
}