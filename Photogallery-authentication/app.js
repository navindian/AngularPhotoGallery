
var express = require('express');
var bodyParser = require('body-parser');
var router =require('./routes/routes');
var cors = require('cors');
var cookieParser=require('cookie-parser')


var app=express();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/',router);

app.listen(7000);
console.log("server started and running at 7000");

module.exports=app;
