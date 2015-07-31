// MSSG - start: 7-28-2015 - Learning about injection

var myApp = angular.module('myApp', []);



///////////////////////////////////////////// 4.17
myApp.controller('mainController417', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'MSSG';
    
    $timeout(function() {
        $scope.name = 'Jessi + Kurt ';
    }, 1000);

    
    $timeout(function() {
        $scope.name = 'Everybody rockin in the house tonite';
    }, 2000);

    
}]);





///////////////////////////////////////////// 4.18 (and 4.19)
myApp.controller('mainController418', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = ''; // This is a 2-way bound variable
    
    $scope.lowercasehandle418 = function() {  // This is a *function*
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.uppercasehandle418 = function() {  // This is a *function*
        return $filter('uppercase')($scope.handle);
    };
    
}]);


///////////////////////////////////////////// 4.20
myApp.controller('mainController420', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    // This is a 2-way bound variable
    $scope.handle420 = '';
    
    // This is a *function*
    $scope.lowercasehandle420 = function() {
        return $filter('lowercase')($scope.handle420);
    };
    
       $scope.uppercasehandle420 = function() {  // This is a *function*
        return $filter('uppercase')($scope.handle420);
    };
    
    // This is the watcher, to see if any keys are pressed or anything like this
    $scope.$watch('handle420', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old content of handle:' + oldValue);
        console.log('New content of handle:' + newValue);
        
    });
    
    // After 1000 ms, display -- this is a service that takes the place of the setTimeout function of JS 
    $timeout(function() {
       
        $scope.handle420 = 'HeresTheNewTwitterhandle';
        console.log('******** From Sec 4.20 -- I am *telling* you: Scope changed!');
        
    }, 1000);
    
}]);



///////////////////////////////////////////// 4.21
myApp.controller('mainController421', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle421 = '';
    
    $scope.lowercasehandle421 = function() {
        return $filter('lowercase')($scope.handle421);
    };
    
    $scope.char_reqt = 5;
    
    $scope.rulesforlife = [
      
        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be waaaay cool" }
        
    ];
    
    console.log($scope.rules);
    
}]);



///////////////////////////////////////////// 4.22
myApp.controller('mainController422', ['$scope', function($scope) {
    
    $scope.didyouclick= function(){
    alert("You DID click me, you strapping young person, you");
          };
    
    $scope.nametoshow = 'MG is da man';
    
}]);







///////////////////////////////////////////// 4.23
myApp.controller('mainController423', ['$scope', '$filter', function($scope, $filter) {
    
    ///////////////////////// This section is *very* complex, and though i looked at it, didn't get the syntax very well, as he says will be likely -- it's mostly set up for sec 4.24
 
}]);



///////////////////////////////////////////// 4.24
myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

     ///////////////////////// This section is clearer, but still complex, and there's not much interactivity because i don't have a local DB or api, and can't run it.  Watched, but skipped.
    
    
    
    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('/api')
        .success(function (result) {

            $scope.rules = result;

        })
        .error(function (data, status) {

            console.log(data);

        });

    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('/api', { newRule: $scope.newRule })
            .success(function (result) {

                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';

            })
            .error(function (data, status) {

                console.log(data);

            });
    };
}]);