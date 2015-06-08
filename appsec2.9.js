// MODULE
var mssgAngApp = angular.module('mssgAngApp', []);

console.log('------------- In mssgAngapp!!!')

// CONTROLLERS
// mssgAngApp.controller('mainController', ['$scope', function ($scope) {

 mssgAngApp.controller('controller1', function ($scope) {

     $scope.getname = function() {
         return 'MSSG the Man';
     }
     
     console.log('------------- In controller1!!!');
     console.log(    $scope);
});

