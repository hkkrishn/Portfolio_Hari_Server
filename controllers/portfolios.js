//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Controller that allow for functionality passed as function handlers

const  mongoose  = require("mongoose")

//import Model and Schema
const Portfolio = mongoose.model('Portfolio');


//retrieve data from mongo db
exports.getPortfolios= async(req,res)=>{
    //fetch all the documents with built in functions from the model
    const portfolios = await Portfolio.find({})
    return res.json(portfolios)
}