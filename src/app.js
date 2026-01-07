const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();

// Middleware to parse incoming request body to JSON in entire application.
app.use(express.json());
// Centralized error handler

// Registering the user router
app.use("/api", userRouter);
app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something went wrong!" });
});
module.exports = app;
