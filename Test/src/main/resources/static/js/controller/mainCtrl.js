var app = angular.module("myApp",['ngRoute']).config(function ($routeProvider) {
            $routeProvider.when("/index",{
                templateUrl:"index.html",
                controller:"mainCtrl"
            }).when("/login",{
                templateUrl:"html/login.html",
                controller:"loginCtrl"
            }).when("/registry",{
                templateUrl:"html/registry.html",
                controller:"registryCtrl"
            }).otherwise({
                redirectTo:"/"
            })
        });
app.controller("mainCtrl",function ($rootScope,$scope) {
    $rootScope.isLandingPage = false;
    console.log("");
})