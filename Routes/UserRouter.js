const express = require('express')
const Router = express.Router()

// Import User Controller 
const UserController = require('./../Controllers/UserController')

Router.get('/get', UserController.getUsers)

module.exports = Router