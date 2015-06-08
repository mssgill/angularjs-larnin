var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    console.log($scope);
    
});


// Just make some dummy vars to show in the console log
var searchPeople = function(moniker , $scope, girth, wisdom, occupation) {
    return 'janus the deer';
}

// This is the new part here: it shows that the injector function of angjs will separate the searchpeople function arguments into parseable short strings
console.log(angular.injector().annotate(searchPeople));