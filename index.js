//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: This is the entry file for our API Server
const express = require('express');

//initialize server
const server = express();
//initialize entry point to the server
server.get('/test',(req,res)=>{
    return res.json({message:"test is working"})
})
const PORT = parseInt(process.env.PORT) || 3001;
server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Server initialized on PORT' + ' '+ PORT)
    }
})

