var Parse = require("parse/node");
require("./package").setPackage("parse/node");
var api = require('./api');


//setting a user for simulating the current user
var query = new Parse.Query(Parse.User);
query.get("ZWhpXimc5a")
.then(function(user){
    console.log("username",user.get("username"));


///here you can test any functions

    api.getUserMissions(user)
    .then(function(result){
        console.log(result);
    });
    
    
    
    api.listStepsOfMission("7dqLqk3i9q")
    .then(function(result){
        console.log(result);
    })
    
    
    
    
    
    
    
})

