const express = require("express");
const passport = require('passport')
const jwt = require('jsonwebtoken')
const userTeamController = require('../controllers/userTeamController.js')
const teamRouter = express.Router()

teamRouter.post('/',passport.authenticate('jwt', { session: false }), userTeamController.createTeam)
teamRouter.get('/',passport.authenticate('jwt', { session: false }), userTeamController.getTeams)
teamRouter.get('/',passport.authenticate('jwt', { session: false }), userTeamController.getOneTeam)

module.exports = teamRouter