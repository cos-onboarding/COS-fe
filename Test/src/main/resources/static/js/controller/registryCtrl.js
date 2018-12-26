app.controller("registryCtrl",function ($rootScope,$scope,$http) {
    $rootScope.isLandingPage = true;
    
    $scope.IsUsernamePass = false;
    $scope.IsUsernameBlank = false;
    $scope.IsPasswordConfirmed = false;

    var data = { "username": $scope.username, "password": $scope.password};

    var config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//application/json
    };
    $scope.usernameCheck = function(){
        if("" !== $scope.username) {
            $scope.IsUsernameBlank = false;
            $http.post("http://localhost:8081/api/username-check", data, config).then(function (response) {
                console.log(response);
                $scope.hello=response.data.data;
                $scope.IsUsernamePass = true;
            });
        } else {
            $scope.IsUsernameBlank = true;
        }
    }

    $scope.newUser = function(){
        if($scope.password === $scope.confirmPassword) {
            $scope.IsPasswordConfirmed = true;
            $http.post("http://localhost:8081/api/registry", data, config).then(function (response) {
                console.log(response);
                $scope.hello=response.data.data;
            });
        } else {
            $scope.IsPasswordConfirmed = false;
        }
        
    }
   
})