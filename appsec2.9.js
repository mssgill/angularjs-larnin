// MODULE
var mssgAngApp = angular.module('mssgAngApp', []);

console.log('------------- In mssgAngapp!!!')

// CONTROLLERS
// mssgAngApp.controller('mainController', ['$scope', function ($scope) {

 mssgAngApp.controller('controller1', function ($scope) {

     $scope.getname = function() {
         return 'John Doe';
     }
     
     console.log('------------- In controller1!!!');
     console.log(    $scope);
});

