const express = require("express");

const app = express(); 

app.use(express.json())

app.use(express.urlencoded({
  extended:true
})); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    next();
  });
  
require('./routes')(app)

module.exports = app;