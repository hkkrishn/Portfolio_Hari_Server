//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: This is the entry file for our API Server
const express = require('express');



//initialize server
const server = express();
const config = require('./config/dev')
//initialize entry point to the server
server.get('/test',(req,res)=>{
    return res.json({message:"test is working"})
})

//import portfolio routes
const portfolioRoutes = require('./routes/portfolios')

//Mongoose is a MongoDB object modeling tool designed to work in an
//asynchronous environment. Mongoose supports both promises and callbacks.
//import mongoose to link node server to MongoDB

const mongoose = require('mongoose');
//connection string gathered from mongoDB
mongoose.connect(config.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Database successfully connected')
    }
})

//employ route using a basepath
server.use('/api/v1/portfolios',portfolioRoutes)
const PORT = parseInt(process.env.PORT) || 3001;
server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Server initialized on PORT' + ' '+ PORT)
    }
})

