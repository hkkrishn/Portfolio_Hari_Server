//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: API function to return Portfolios

const express =require('express');
//import function getPortfolios
const {getPortfolios,getPortfolioById,createPortfolio,
    updatePortfolio,deletePortfolio } = require('../controllers/portfolios');
const router = express.Router();
const { checkJwt } = require('../controllers/auth');
//express function to handle routes
//Get Enpoint
router.get('',getPortfolios)
//endpoint to get portfolio by id
router.get('/:id',getPortfolioById)
//Initialize server and export.

//create enpoint for new projects
router.post('',checkJwt,createPortfolio)
//TODO create middleware to check for admin rights
//we need to extract portfolio id, in order to update portfolio
router.patch('/:id',checkJwt,updatePortfolio)

//create delete endpoint

router.delete('/:id',checkJwt,deletePortfolio)
module.exports = router;
