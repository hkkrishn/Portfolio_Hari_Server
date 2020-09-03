//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Extracted MongoDB connection logic
const config = require('../config/dev')
const mongoose = require('mongoose');


//Mongoose is a MongoDB object modeling tool designed to work in an
//asynchronous environment. Mongoose supports both promises and callbacks.
//import mongoose to link node server to MongoDB

exports.connect = ()=>{

//connection string gathered from mongoDB
mongoose.connect(config.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Database successfully connected')
    }
})

}
