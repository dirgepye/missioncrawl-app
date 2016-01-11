var package = require("./package").package;
var Parse = require(package);

// Initialize Parse with your Parse application javascript keys
var your_application_id = "NC8PhdseSu4eIz7fjSGX6Vxal3qqjfgnVEZjZ0gH";
var your_javascript_key = "TeJ3i2uljGynZO7wnrb5paUmZnAZjv4YGtzwVrqt";

Parse.initialize(your_application_id,
  your_javascript_key);


//Models
var Mission = Parse.Object.extend("Mission");
var Step = Parse.Object.extend("Step");
var Subscriptions = Parse.Object.extend("Subscriptions");



//////////////////
//API CALLS
//////////////////
module.exports = {
  getUserMissions:getUserMissions,
  subscribeToMission:subscribeToMission,
  listStepsOfMission,listStepsOfMission
}


//List of missions the current user is subscribed to: return an array of mission Parse Object
//adding a user as parameter for test purposing
//if left empty, will get the current user logged in
function getUserMissions(currentUser) { // formerly named findAllMissions

  var currentUser = currentUser || Parse.User.current();
  
  var query = new Parse.Query(Subscriptions);
  
  return query
    .equalTo('User', currentUser)
    .find()
    .then(function(userSubscriptions) {
      return userSubscriptions.map(function(sub){
        return sub.get("Mission");
      });
    });
}


//Steps list of a mission
function listStepsOfMission(missionId) {

  var query = new Parse.Query(Mission);
  
  return query.get(missionId)
  .then(function(currentMission){
    return currentMission.get("missionSteps");
  })
  .then(function(arrayOfSteps){
    return arrayOfSteps;
  })
}


//Subscribe to a Mission
function subscribeToMission(missionId) { // formerly named assignUserToMission

  var user = Parse.User.current(); //user can assign other users to missions so not necessarily current user

  var query = new Parse.Query("Mission");

  query.get(missionId).then(function(mission) {
    var relation = mission.relation("Subscriptions");

    relation.add(user);

    mission.save();
  })
}


//ADD steps to Mission
function assignStepsToMission(title, description, missionId) {

  var step = Parse.object(Step);
  step.set("title", title);
  step.set("description", description);
  //step.set("location", location);

  var query = new Parse.Query("Mission");

  query.get(missionId).then(function(mission) {
    var relation = mission.relation("missionStep");
    relation.add(step);
    step.save();
  })
}





// Create A Mission

// var Mission = Parse.Object.extend('Mission');
// var MissionStep = Parse.Object.extend('Step');

// var mission = new Mission();
// mission.set({
//   title: 'Dessert Crawl',
//   description: 'Eat all the desserts',
//   //location: {}
// });

// var missionStep = new MissionStep();
// missionStep.set({
//   title: 'Go to Christian Faure',
//   //location: {lat: 45, lng: -74},
// });

// var steps = mission.get('missionSteps') || [];

// steps.push(missionStep);

// mission.set('missionSteps', steps);
// missionStep.save();

// mission.save()




// var mission = new Parse.Query(Mission);


// mission.get("mission-id")
//   .then(function(mission) {
//     // The object was retrieved successfully.
//   })
//   .then(function(hello) {
//     // Everything is done!
//   }, function(object, error) {
//     // The object was not retrieved successfully.
//     // error is a Parse.Error with an error code and message.
//   });






//listStepsOfMission("bxreD6KsvJ");




//a step





//Complete a step //enter KEY
