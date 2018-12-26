app.controller("loginCtrl",function ($rootScope,$scope,$http) {
    $rootScope.isLandingPage = true;
    $scope.isLoggedin = false;
    $scope.isOneblank = true;

        
    $scope.userLogin = function(){
        //var data = { username: $scope.username, password: $scope.password};
        var param = "username="+$scope.username+"&"+"passowrd="+$scope.password; 
        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//application/json
        };
        if("" !== $scope.username && "" !== $scope.password) {
            $scope.isOneblank = true;
            $http.post("http://localhost:8081/api/login", param, config).then(function (response) {
                if("success" == response.data.data) {
                    $scope.isLoggedin = false;
                } else {
                    $scope.isLoggedin = true;
                }
            }).catch(function(){
                $scope.isLoggedin = true;
            });

        }else {
            $scope.isOneblank = false;
        }
    } 
       
})