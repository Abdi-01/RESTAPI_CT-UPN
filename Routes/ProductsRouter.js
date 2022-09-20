const express = require('express')
const Router = express.Router()

// Import Controller
const ProductsController = require('./../Controllers/ProductsController');

Router.get('/get', ProductsController.getProducts)
Router.post('/post', ProductsController.postProducts)
Router.patch('/update/:id', ProductsController.updateProducts)

module.exports = Router