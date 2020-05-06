var express = require('express');
var routing= express.Router();
var busLog=require('../public/javascripts/BL.js');



routing.post('/employee/verify',function(request,response,next){
    var staffId=request.body.staffId;
    var password=request.body.password;
    console.log(staffId,password)
    return busLog.loginUser(staffId,password)
            .then(function(data){
                response.json(data);
            }).catch(function (error){
                if(error.status==404){
                    response.json(error)
                }else{
                    next(error);
                }
            });
});

routing.post('/signup',function(request,response,next){
    var credentials={
        "staffId":request.body.staffId,
        "password":request.body.password
    }
    return busLog.signupUser(credentials)
            .then(function(item){
                response.json(item);
            }).catch(function (error){
                next(error);
            });
});

module.exports=routing;