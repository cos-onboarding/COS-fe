app.controller("baseinfoCtrl",function ($rootScope,$scope,$http) {
    $rootScope.isLandingPage = false;

    $scope.appinit = function(){
            var param = {username:window.sessionStorage.getItem("username")};
            $http.post("/camel/api/viewallcontactinfo", param).then(function (response) {
                $scope.records = {};
                //console.log(response);
                //console.log("base");
                $scope.records = response.data.user;
                //console.log($scope.records);
                    
            }).catch(function(){
                
            });
    }
    
    $scope.view = function(appid){ 
    	console.log("appid:");
    	console.log(appid+"===");
        window.sessionStorage.setItem("application",appid);
            // window.sessionStorage.setItem("infos",response.data.infos);
        window.location.href="#!/info";
                
    } 
    
    $scope.delinfo = function(appid){
    	let param = {application:appid}
    	$http.post("/camel/api/delinfo", param).then(function(response) {
            
    		console.log("del_begin");
            console.log(response);
            console.log("del_end"); 
            $scope.appinit();
                
        }).catch(function(){
            
        });
    }
   
})