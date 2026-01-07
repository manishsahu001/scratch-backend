const express = require("express");
const app = express();

// Centralized error handler
app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something went wrong!" });
});
module.exports = app;
