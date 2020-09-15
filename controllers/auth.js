//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: middleware function to check auth status


const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const config = require('../config/dev');

// Authentication middleware
// This middleware will check access token in authorization headers
// of a request
// It will verify access token against Auth0 JSON web key set
exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: 'https://dev-wec1sbcv.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://dev-wec1sbcv.us.auth0.com/api/v2/',
  issuer: 'https://dev-wec1sbcv.us.auth0.com/',
  algorithms: ['RS256']
});

//custom middleware
//middleware that takes in a req and res object and a function
//this middleware will receive the role of the user and checks if the user has a specific role


exports.checkRole = role => (req, res, next) => {
  //since this middleware comes after checkJWT we can expect this to have the user object
  const user = req.user;
  console.log(user)

  if (user && user[config.AUTH0_NAMESPACE + '/roles'].includes(role)) {
    next();
  } else {
    return res.status(401).send('You are not authorized to access this resource!')
  }
}