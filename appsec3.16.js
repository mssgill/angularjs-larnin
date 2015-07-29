// MSSG notes -- 7-28-2015
// Controllers using dependency injection that survive minification

var myApp = angular.module('myApp', []);

// Note the brackets below -- passing an array to the controller, of 2 strings and a function.
// Function that defines the controller is always last elt of the array, and the first things are the args to the function

// Note that a minifier can never change the name of a string inside quotes
myApp.controller('mainController', ['$scope', '$log', function($myscope,$mylog) {    
    console.log($myscope);   
     console.log($mylog);   
}]);
