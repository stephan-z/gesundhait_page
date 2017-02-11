var mainApp = angular.module('mainApp', ['ngRoute']);

// Routing
mainApp.config(function($routeProvider)
{
    $routeProvider
        .when('/',
        {
            controller: 'HomeController',
            templateUrl: 'views/viewHome.html'
        })
        .otherwise({redirectTo: '/'});
});
