const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const feedroutes= require("./routes/feed");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods"," GET, POST, PUT, DELETE")
    next();
  });

app.use(bodyParser.json());
app.use(feedroutes);

mongoose.connect("").then(()=>{
    console.log('connect');
    app.listen(3001)
})