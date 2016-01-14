var Parse = require("parse/node");
require('./package').setLibForNodeTesting();
var api = require('./api');


//setting a user for simulating the current user
var query = new Parse.Query(Parse.User);
query.get("ifYjtzkhKS")
.then(function(user){
    console.log("username",user.get("username"));


///here you can test any functions

    // api.getUserMissions(user)
    // .then(function(arrayOfMissions){
    //     console.log(arrayOfMissions);
        
    //     arrayOfMissions.map(function(mission){
    //         var missionId = mission.id;
    //         console.log(missionId);
            
    //         var query = new Parse.Query(Parse.Object.extend("Mission"));
            
    //         query.get(missionId).then(function(the_actual_mission){
    //             console.log(the_actual_mission.get("title"));
    //         })
            
    //         // mission.then(function(the_mission){
                  
    //         // })
    //     })
        
    // });
    

    // api.listStepsOfMission("drDo8bvZLy")
    // .then(function(result){
    //     console.log(result);
    // });
    
    //     api.getFirstStep("DXEfdX7Job")
    // .then(function(result){
    //     console.log(result);
    // });
    
    // api.getUserMissions(user).then(function(result){
    //     console.log(result);
    // });
    
    //     api.subscribeToMission("drDo8bvZLy").then(function(result){
    //     console.log(result);
    // });
    
    
    // api.userCurrentStep("ZWhpXimc5a").then(function(result){
    //     console.log(result);
    // });
    
    
    // api.assignStepsToMission("La Commune2","Visit the geniuses at DecodeMTL!",{latitude:45.5077, longitude:-73.555594},'drDo8bvZLy').then(function(result){
        
    // });
    
    // api.getMission("KAE1EVMdaM").then(function(mission){

    //     api.userCurrentStep(mission,user).then(function(step){
    //         console.log(step.get("title"));
    //     })
    // })
    
    // api.getUserMissions(user)
    // .then(function(result){
    //     console.log(result);
    // })
    
    api.completeStep("drDo8bvZLy", user)
    .then(function(result){
        console.log(result);
    })
    
})

