/**
 * Created by noratop on 2016-01-12.
 */
var Parse = require('parse');


function userSignup(username, password, email) {
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    return user.signUp(null);
}


function userLogIn(username, password) {
    return Parse.User.logIn(username, password);
        //.then(function(user) {
        //    console.log("log in successful!");
        //    return {
        //        status: true,
        //        response: user
        //    }
        //}, function(user, error) {
        //    return {
        //        status: false,
        //        response: error
        //    }
        //    //console.log("Login error: " + error.message);
        //});
}


module.exports = {
    userSignup: userSignup,
    userLogIn: userLogIn
}