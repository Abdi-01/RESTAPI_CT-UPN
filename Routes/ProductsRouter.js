const express = require('express')
const Router = express.Router()

// Import Controller
const ProductsController = require('./../Controllers/ProductsController');

// Middleware
const Auth = require('./../Middleware/Auth')

Router.get('/get', ProductsController.getProducts)
Router.post('/post', ProductsController.postProducts)
Router.patch('/update/:id', ProductsController.updateProducts)
Router.delete('/delete/:id', Auth, ProductsController.deleteProducts)

module.exports = Router