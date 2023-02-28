const express = require('express')
const userModel = require('../models/userModel.js')
const userTeamModel = require('../models/userTeamModel.js')
const teamRouter = require('../routes/userTeamRoute')

const createTeam = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id)  
      console.log('user =>', user );
      if(user){
        const teamCreated = {
            team_name: req.body.team_name,
            description: req.body.description,
            coach: req.user._id,
            // players: req.body.players
            players: [],
            points: 0,
        }
      
       newTeam = await userTeamModel.create(teamCreated)
       return res.status(200).json({ status: true, teamCreated}) 
      } else (res.status(404).json({message: 'User not found'}))
      
    } catch (error) {
        next(error)
    }
}

const getOneTeam = async (reg, res, next) => {
  try{
    const team = await userTeamModel.findById(req.team._id)
    if(!team){
      return res.status(404).json({message: 'Team not found'})
    }
  } catch (error){
    next (error)
  }
}

const getTeams = async (req, res, next) => {
  try{ 
    const teams = await userTeamModel.find()
    return res.status(200).json({status: true, teams})
  } catch(error){
    next(error)
  }
}

// Add a player to a team.
 const addPlayerToTeam =  async (req, res, next) => {
  try {
    const team = await userTeamModel.findById(req.params.id)
    if(!team){
      return res.status(404).json({message: 'Team not found'})
    }
    const newPlayer = {
      name: req.body.name,
                position: req.body.position,
                point: req.body.point,
                team: req.body.team,

    }
    team.players.push(newPlayer);
  } catch (error) {
    
  }
 } 

module.exports = {createTeam,getOneTeam, getTeams}