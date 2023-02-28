const app = require('./index.js')
const db = require('./db.js');
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 7000

// connect to database
db.connect();

// Starts server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....!`);
  });