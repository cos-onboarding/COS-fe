var app=angular.module("myApp",[]).config(function ($routeProvider) {
            $routeProvider.when("/index",{
                templateUrl:"/index.html",
                controller:"js/controller/mainCtrl"
            }).when("/login",{
                templateUrl:"/html/login.html",
                controller:"js/controller/loginCtrl"
            }).when("/registry",{
                templateUrl:"/html/registry.html",
                controller:"js/controller/registryCtrl"
            }).otherwise({
                redirectTo:"/index"
            })
        });
app.controller("mainCtrl",function () {

})