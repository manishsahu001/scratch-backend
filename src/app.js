const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();

// Middleware to parse incoming request body to JSON in entire application.
app.use(express.json());

// Registering the user router
app.use("/api/user", userRouter);

// Centralized error handler
app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something went wrong!" });
});
module.exports = app;
