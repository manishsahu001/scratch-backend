const asyncWrapper = require("../utils/asyncWrapper");
const userService = require("../services/userService");
const AppError = require("../utils/customError");
const getUsers = asyncWrapper(async (req, res, next) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
});

const createUser = asyncWrapper(async (req, res, next) => {
  const isUserExists = await userService.createUser;
  if (isUserExists) {
    return next(new AppError("User already exists", 500));
  }
  return res.status(201).json({ message: "User has been created." });
});
module.exports = { getUsers, createUser };
