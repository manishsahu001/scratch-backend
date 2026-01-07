const express = require("express");
const authorization = require("../middleware/authorization");
const userController = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get("/", authorization, userController.getUsers);
module.exports = userRouter;
