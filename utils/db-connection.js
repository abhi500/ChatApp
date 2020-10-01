const mongoose = require('mongoose');
const dbconfig = require('../config/db.config.json');

//connect to chatapp database
mongoose.connect(`mongodb://${dbconfig.development.host}/${dbconfig.development.dbname}`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

//get connection instance
connection = mongoose.connection;

//error event
connection.on('error', console.error.bind(console, 'connection error:'));

//open event
connection.once('open', async function() {
    console.log("connected to db")
});
    
  
