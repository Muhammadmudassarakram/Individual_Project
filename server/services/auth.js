const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//const config = require('../config');
//const NAMESPACE = config.NAMESPACE;
const NAMESPACE = 'http://localhost:3000/';

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://dev-9koc35jr.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: '80uWz1wCPSZt1KZIEQjOPG9Mvn1mdCu8',
  issuer: 'https://dev-9koc35jr.eu.auth0.com/',
  algorithms: ['RS256']
})


exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[NAMESPACE + '/role'] && (user[NAMESPACE + '/role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
  }
}



