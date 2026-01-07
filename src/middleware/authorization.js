const AppError = require("../utils/customError");

const authorization = (req, res, next) => {
  // const token = req.headers.authorization;
  const token = true;
  if (!token) {
    return next(new AppError("Unauthorized!", 401));
  }
  next();
};

module.exports = authorization;
