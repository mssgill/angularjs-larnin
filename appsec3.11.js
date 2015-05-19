var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    
    $scope.name =  'Kubla Khan';
    $scope.pet =  'rock';
    
    $scope.getpet = function(){
    return 'illgiveyouarock'
    }
    
    $scope.getpet()
    
    console.log($scope);
    
});
