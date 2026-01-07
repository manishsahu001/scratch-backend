const AppError = require("../utils/customError");

const getUsers = async () => {
  return [];
};
const createUser = async (req, res, next) => {
  const isUserExists = true;
  if (isUserExists) {
    return next(new AppError("User already exists", 500));
  }
};
module.exports = { getUsers, createUser };
