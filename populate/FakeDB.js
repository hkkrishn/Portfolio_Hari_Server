//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Class responsible for adding and removing data from our database.


const {portfolios} = require('./data')
const Portfolios = require('../DB/models/portfolio')
class FakeDB{

// function to delete all data from database
     clean = async()=>{
        await Portfolios.deleteMany({})
     }

     //function to add data to Database
     addData = async()=>{
         await Portfolios.create(portfolios)
     }

     // function that cleans and then adds all data
     populate = async()=>{
        await this.clean();
        await this.addData();
    }
}

//export instance of class
module.exports = new FakeDB();