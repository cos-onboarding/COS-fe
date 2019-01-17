app.controller("loginCtrl",function ($rootScope,$scope,$http) {
    $rootScope.isLandingPage = false;
    $scope.isLoggedin = false;
    $scope.isOneblank = true;
        
    $scope.userLogin = function(){
        var param = { "username": $scope.username, "password": $scope.password};
        if("" !== $scope.username && "" !== $scope.password) {
            $scope.isOneblank = true;
            $http.post("/camel/api/login", param).then(function (response) {
                if("200"== response.status && response.data.users.length>=1) {
                //if("sucess"== response.data.result) {
                    $scope.isLoggedin = false;
                    
                    console.log("login:");
                    //console.log(response.data.result);
                    console.log(response.status);
                    window.sessionStorage.setItem("username",$scope.username);
                    window.sessionStorage.setItem("password",$scope.password);
                    // window.sessionStorage.setItem("infos",response.data.infos);
                    console.log("login:end");
                    window.location.href="#!/baseinfo";
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