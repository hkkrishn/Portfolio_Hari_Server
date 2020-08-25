//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: API function to return Portfolios

const express =require('express');
//import function getPortfolios
const {getPortfolios} = require('../controllers/portfolios.js')
const router = express.Router();
//express function to handle routes
//Get Enpoint
router.get('/',getPortfolios)
//Initialize server and export.
module.exports = router;
