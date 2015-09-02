// MSSG - start: 8-31-2015 -- SPA

var myApp = angular.module('myApp', ['ngRoute']); 
// The ngRoute stuff is included for sec 5.27

///////////////////////////////////////////// Sec 5.25
myApp.controller('mainController525', ['$scope', function($scope) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController525', ['$scope', function($scope) {
    
    $scope.name = 'Second';
    
}]);



///////////////////////////////////////////// Sec 5.26
window.addEventListener('hashchange', function() {
   
    if (window.location.hash === '#/bookmark/1') {
        console.log('Page 1 is cool.');
    }
    
    if (window.location.hash === '#bmark2') {
        console.log('Let me go get Page 2.');
    }
    
    if (window.location.hash === '#bmarkk3') {
        console.log('Here\'s Page 3.');
    }
    
});


///////////////////////////////////////////////// Sec 5.27

// Initial stuff using built-in route parsing angjs tools:

myApp.controller('mainController527', ['$scope', '$location', '$log', function($scope, $location, $log) {
    
    // This will log the stuff after the hashmark to the console log area
    $log.info($location.path())
    
}]);

// More complex stuff using the angular-route module:

myApp.config(function ($routeProvider) {
    
    $routeProvider

    // Watch for the hash mark
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController527a'
    })

        // Watch for the 'second' URL
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController527b'
    })
    
});

// We can use separate controllers for each webpage, as if they're totally separate domains
myApp.controller('mainController527a', ['$scope', '$log', function($scope, $log) {
    
    // Assign dif vals into each controller's scope name
    $scope.name = 'Mainjuice';
    
}]);

myApp.controller('secondController527b', ['$scope', '$log', function($scope, $log) {

    // Assign dif vals into each controller's scope name
    $scope.name = 'Secondstring';
    
}]);


