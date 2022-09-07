const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flixStock');// connect db
const db = mongoose.connection;// acquire conncetion
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});
module.exports = db;