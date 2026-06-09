const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/user.controller");

userRoute.post("/register", userController.registerUser);

module.exports = userRoute;