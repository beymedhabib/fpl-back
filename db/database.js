var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/FPL")
var db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;
