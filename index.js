const express = require('express')
const app = express()

// Initialize body parser untuk menerima req.body dari client
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Our API </h1>')
})

// Import Router 
const ProductsRouter = require('./Routes/ProductsRouter')
const UserRouter = require('./Routes/UserRouter')
app.use('/products', ProductsRouter)
app.use('/user', UserRouter)

const PORT = 5001
app.listen(PORT, () => console.log('API Running on PORT ' + PORT))