const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose');
const connectToMongoDB = require("./db");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const userController = require('./controllers/userController.js')
const userRoute = require('./routes/userRoute.js')
const playerRoute = require('./routes/playerRoutes.js')
const teamRoute = require("./routes/userTeamRoute.js");
const userModel = require('./models/userModel.js')
const userTeamModel = require('./models/userTeamModel.js')
const userTeamController = require('./controllers/userTeamController.js')
const app = express()
const PORT = 7001
dotenv.config()

//connecting to MonGoDB Instance
connectToMongoDB( mongoose.set('strictQuery', true));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) =>{
    return res.send('Welcome to the FPL App!!!')
})

// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use('/api/v1',userRoute);
app.use('/api/v1/signup', passport.authenticate('jwt', { session: false }),userRoute);
app.use('/api/v1/login', passport.authenticate('jwt', { session: false }),userRoute);
app.use('/api/v1/logout',userRoute);
app.use('/api/v1/teams/create-team',passport.authenticate('jwt', { session: false }),teamRoute);
app.use('/api/v1/teams/getOne-team',passport.authenticate('jwt', { session: false }),teamRoute);
app.use('/api/v1/teams/get-teams',passport.authenticate('jwt', { session: false }),teamRoute);
app.use('/api/v1/players/create-player',passport.authenticate('jwt', { session: false }),playerRoute);
app.use('/api/v1/players/get-players',passport.authenticate('jwt', { session: false }),playerRoute);

//Users Routes
// app.get("/users",userTeamController.all );
// app.get("/users/create", userController.create);
// app.get("/users/:author", userController.find);
// app.get("/users/:author/posts",userController.getAllPosts);


// 404 Route
app.use('*', (req, res) => {
    return res.status(404).json({message: 'route not found'})
})


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....!`);
  });
  

module.exports = app