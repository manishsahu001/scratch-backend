const asyncWrapper = require("../utils/asyncWrapper");
const userService = require("../services/userService");
const getUsers = asyncWrapper(async (req, res, next) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
});

module.exports = { getUsers };
