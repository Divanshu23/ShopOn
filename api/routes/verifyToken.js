const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


dotenv.config();

//For general customer login
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not Authenticated");
  }
};

//Only admin and user itself has the ability to edit 
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not Allowed to do this!");
    }
  });
};

//for Routes that are only available for admin
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("Not Allowed to do this!");
      }
    });
  };
module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};
