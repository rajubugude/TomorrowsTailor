const jwt = require("jsonwebtoken");
const User = require("../model/User");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("Access Denied, You are not authenticated!");
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.status(403).json("Token is invalid!");
    }
    req.userId = data._id;

    console.log("passed!");
    next();
  });
});

module.exports = { protect };
