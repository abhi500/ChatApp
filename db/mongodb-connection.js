const mongoose = require('mongoose');

//connect to chatapp database
mongoose.connect('mongodb://localhost/chatapp', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

//error event
db.on('error', console.error.bind(console, 'connection error:'));

//open event
db.once('open', async function() {
    console.log("connected to db")
});

