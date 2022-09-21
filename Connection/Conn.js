const { Pool } = require('pg')

const pool = require('pg').Pool 
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ctupn',
    password: '20121995',
    post: 5432,
    connectionLimit: 10
})

db.connect((err) => {
    if(err) return console.log('Error ' + err.message)

    console.log('Connected to Database')
})

module.exports = db