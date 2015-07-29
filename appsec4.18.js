// Sec 4.18: directives and 2-way data binding 

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = ''; // This is a 2-way bound variable
    
    $scope.lowercasehandle = function() {  // This is a *function*
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.uppercasehandle = function() {  // This is a *function*
        return $filter('uppercase')($scope.handle);
    };
    
}]);

var tb = document.getElementById("textbox1");

// Sec 4.19:

console.log(tb);  // ??? - Why is this not properly logged to console?  Causes prob with the below, also 

tb.addEventListener("keypress", function(event){
    console.log("You scoundrel -- you pressed a key!")
});
