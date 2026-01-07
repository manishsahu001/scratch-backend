const express = require("express");
const authorization = require("../middleware/authorization");
const userController = require("../controllers/userControllers");
const validateBody = require("../utils/validateBodyJoi");
const createUserSchema = require("../schemas/createUserSchema");
const userRouter = express.Router();

userRouter.get("/", authorization, userController.getUsers);
userRouter.post(
  "/",
  authorization,
  validateBody(createUserSchema),
  userController.createUser
);
module.exports = userRouter;
