//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Script to connect to database and populate data

const config = require('../config/dev')
const mongoose = require('mongoose');
const FakeDB = require('./FakeDB')


//Mongoose is a MongoDB object modeling tool designed to work in an
//asynchronous environment. Mongoose supports both promises and callbacks.
//import mongoose to link node server to MongoDB



//connection string gathered from mongoDB
mongoose.connect(config.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}, async (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Stating data population of DB')
        await FakeDB.populate()
        await mongoose.connection.close()
        console.log('Database has been populated')
    }
})


