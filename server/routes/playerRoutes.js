const express = require("express");
const passport = require('passport')
const jwt = require('jsonwebtoken')
const playerController = require('../controllers/playerController.js')
const playerRouter = express.Router()

playerRouter.post('/',passport.authenticate('jwt', { session: false }), playerController.createPlayer)
playerRouter.get('/',passport.authenticate('jwt', { session: false }), playerController.getAllPlayers)

module.exports = playerRouter