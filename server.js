const express = require("express");
const jsonparser = require("body-parser");
const db = require("./db/database");
const auth = require("./Api/authApi");
const user = require("./Api/userApi");
const passport = require("./passport");
const votelimite = require('./votelimite')

const http = require('http');
const path = require('path')
const cors = require('cors')
const app = express();
app.use(jsonparser.json({ limit: '50mb' }));
app.use(jsonparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cors()); 
app.use("/auth", auth);
app.use('/user', user);
const server = http.createServer(app);  
// const io = socketIO(server);

// app.use(express.static(path.join(__dirname, 'dist')));

server.listen(3000);