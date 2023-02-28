const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const playerModel = require("./playerModel");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Players = require ("./playerModel")

const teamsModel = new Schema({
    
    id: ObjectId,
    team_name:{
        type: String,
        required: true,
        unique: true
    },

    description:{
        type: String,
        required: false
    },

    coach:{
        type: String,
        required: true,
    },

    players: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Teams",
        },
      ],
      
    points: Number,
     
   
},  {timestamps: true})


module.exports = mongoose.model('Teams', teamsModel)
