// Declare the app name
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
});

// Declare this function
var searchPeople = function(firstName, lastName, height, age, occupation, faveclimbingroute) {
    return 'mssg the bommdiggity';
}

// Now write the entire contents of the function to a string
var searchPeopleString = searchPeople.toString();

// And show it on the console
console.log(searchPeople);