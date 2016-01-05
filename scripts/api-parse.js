// var Parse = require("parse");
var Parse = require('parse/node');


var your_application_id = "NQATCHki1IGmGfNuoNzgBMhEQrlSNaoMA0kcNExN";
var your_javascript_key = "ySbNlYIkFzVS2B5R22JtIbYAtJHGGeMfWpfkpzFD";


// Initialize Parse with your Parse application javascript keys
Parse.initialize(your_application_id,
    your_javascript_key);


//Models
var Mission = Parse.Object.extend("Missions");
var Step = Parse.Object.extend("Step");


//////////////////
//API CALLS
//////////////////


//User signup


//User signin


//List of missions
var mission_list = new Parse.Query(Mission);

mission_list.find()
.then(function(results) {
  console.log("Successfully retrieved " + results.length + " scores.");
})
.then(function(hello) {
  // Everything is done!
}, function(error) {
  console.log("Error: " + error.code + " " + error.message);
});


//A mission
var mission = new Parse.Query(Mission);
mission.get("mission-id")
.then(function(mission) {
    // The object was retrieved successfully.
})
.then(function(hello) {
  // Everything is done!
}, function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
});



//Steps list of a mission





//a step





//Complete a step