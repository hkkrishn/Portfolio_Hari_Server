//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Database Model for portfolios which contains schema to communicate with MongoDB.

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema to describe our data
const portfolioSchema = new Schema({
    title:String,
    description:String,
})

//Mode0l with Schema provided
module.exports = mongoose.model('Portfolio',portfolioSchema)