const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 5,
  message: "You have exceeded the 5 votes in 24 hrs limit!",
  headers: true,
});