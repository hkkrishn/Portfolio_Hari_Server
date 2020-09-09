//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: This is the entry file for our API Server
const express = require('express');



//initialize server
//grab data from body of request
const bodyParser = require('body-parser')
const server = express();
const config = require('./config/dev')
//initialize entry point to the server
server.get('/test',(req,res)=>{
    return res.json({message:"test is working"})
})
const {connect} = require('./DB')
//run the exported connection function
//connect is a promise
//import portfolio routes
const portfolioRoutes = require('./routes/portfolios')

//async function that starts the server by awaiting the response from the mongoDB connect function
const runServer = async()=>{
    await require('./DB').connect();

    server.use(bodyParser.json())

    //employ route using a basepath run the server
server.use('/api/v1/portfolios',portfolioRoutes)
const PORT = parseInt(process.env.PORT) || 3001;
server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Server initialized on PORT' + ' '+ PORT)
    }
})

}
runServer();







