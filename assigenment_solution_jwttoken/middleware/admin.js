const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
const {JWT_SECERT} = require('../confige')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the the admin DB.
  // here do by using token
  const token = req.headers.authorization;  // Bearer token 
  // Barreer ljdsfoiwqjenwofqi.aldknflk.aklsdjfpqwoie
  const words = token.split(" ");
  // .split(" ") => means -> Barer adfaff => ["Barer", "adfdff"]
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECERT);
  if(decodedValue.username){
    next();
  }else{
    res.status(403).json({
      msg: "You are not authorized please try again"
    })
  }
}

module.exports = adminMiddleware;
