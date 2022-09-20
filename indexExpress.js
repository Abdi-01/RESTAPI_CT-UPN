const express = require('express')
const app = express()

// Initialize body parser untuk menerima req.body dari client
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Our API </h1>')
})

// Import Router 
const ProductsRouter = require('./Routes/ProductsRouter')
app.use('/products', ProductsRouter)

const PORT = 5001
app.listen(PORT, () => console.log('API Running on PORT ' + PORT))