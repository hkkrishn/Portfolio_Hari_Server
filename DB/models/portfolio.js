//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Database Model for portfolios which contains schema to communicate with MongoDB.

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema to describe our data
const portfolioSchema = new Schema({
    title:{type:String,required:true,maxlength:128},
    company:{type:String,required:true,maxlength:64},
    companyWebsite:{type:String,required:true,maxlength:128},
    location:{type:String,required:true},
    jobTitle:{type:String,required:true},
    description:{type:String,required:true},
    startDate:{type:Date,required:true,maxlength:64},
    endDate:{type:Date},
    createdAt:{type:Date,required:true,default:Date.now()}
})

//Mode0l with Schema provided
module.exports = mongoose.model('Portfolio',portfolioSchema)