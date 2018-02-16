const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: ""
// })
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extened: false}));

app.use(bodyParser.json());

app.use(express.static("client/public"));

app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
