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
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Controller that allows for the creation of New projects

//error handling is done via try/catch statement
exports.createPortfolio = async (req,res)=>{
    const projectData = req.body;
    //User Id for admin from Auth0

    //since we are chaining the checkJWT middleware this will provide the user id into the request obj
    const userId = req.user.sub;//.sub is defined from auth0
    console.log(projectData)
    //create instance of model
    const portfolio =  new Portfolio(projectData)
    portfolio.userId = userId
    try{

        const newProject = await portfolio.save();
        //send back created portfolio
        return res.json(newProject);

    }catch(err){
        return res.status(422).send(err.message)
    }

}
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Controller that allows for the updating of project data server side

//error handling is done via try/catch statement
exports.updatePortfolio = async (req, res) => {

    //we get the body we want to update, the params provides the id
    const { body, params: {id}} = req;

    try {
        //the runValidotors will need to execute to confirm the update to the doc

      const updatedPortfolio = await Portfolio.findOneAndUpdate({_id: id}, body, {new: true, runValidators: true})
      return res.json(updatedPortfolio);
    } catch(error) {
      return res.status(422).send(error.message);
    }
  }