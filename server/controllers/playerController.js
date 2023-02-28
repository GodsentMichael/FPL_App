const express = require('express');
const playerModel = require('../models/playerModel.js');
const userModel = require('../models/userModel.js');
const playerRouter = require('../routes/playerRoutes');

// To add a new player.
const createPlayer = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)  
        console.log('user =>', user );
        if(user){
            const newPlayerCreated = {
                name: req.body.name,
                position: req.body.position,
                point: req.body.point,
                team: req.body.team,
            };
            newPlayerCreated.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
            const newPlayer = await playerModel.create(newPlayerCreated)
            return res.status(200).json({status: 'success', newPlayerCreated})
        } else {
            return res.status(404).json({message: 'user not found'})
        }
       
    } catch (error) {
        next (error)
    }
	
};

// To get all players.
const getAllPlayers = async (req, res, next) => {
    try {
        const players = await playerModel.find()
        return res.status(200).json({status: 'success', players})
    } catch( error){
        next (error)
    }
}


module.exports = {createPlayer, getAllPlayers}
