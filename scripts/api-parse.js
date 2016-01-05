// var Parse = require("parse");
var Parse = require('parse/node');


var your_application_id = "NQATCHki1IGmGfNuoNzgBMhEQrlSNaoMA0kcNExN";
var your_javascript_key = "ySbNlYIkFzVS2B5R22JtIbYAtJHGGeMfWpfkpzFD";


// Initialize Parse with your Parse application javascript keys
Parse.initialize(your_application_id,
    your_javascript_key);


//Models
var Missions = Parse.Object.extend("Missions");


//Retrieving data
var missions_list = new Parse.Query(Missions);
missions_list.find({
  success: function(results) {
    console.log("Successfully retrieved " + results.length + " scores.");
    }
 ,
  error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
});