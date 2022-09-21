const express = require('express')
const Router = express.Router()

// Import User Controller 
const UserController = require('./../Controllers/UserController')

Router.get('/get', UserController.getUsers)
Router.post('/create', UserController.createUsers)
Router.patch('/update/:id', UserController.updateUsers)

module.exports = Router