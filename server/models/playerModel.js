const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const playerSchema = new Schema({
    id: ObjectId,
    name: {type: String, required: true},
    position: Number,
    team: {type: String, required: true},
    points: {type: Number, default: 0}
})

const playerModel = mongoose.model("Players", playerSchema)
module.exports = playerModel