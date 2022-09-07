const express=require('express');
const app=express();
const port=8000;
const db = require('./config/mongoose');// database
// use express router
app.use(express.json());// encode json data
app.use('/', require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log("error",err);
        return;
    }
    console.log("server is running on port",port)
})