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

//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Controller that allow for retrieval of portfolio by ID

//error handling is done via try/catch statement

exports.getPortfolioById = async (req,res)=>{
    try{
    console.log(req.params.id)
    const portfolio = await Portfolio.findById(req.params.id)
    return res.json(portfolio);

    }catch(err){
        console.log(err)
        return res.status(422).send(err.message)
    }

}