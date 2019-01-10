app.controller("basicinfoCtrl",function ($rootScope,$scope,$http) {
	 $rootScope.isLandingPage = false;
    $scope.saveInfo = function(){
    	var uid="";  //
    	for(var i=0;i<8;i++) //8位随机数，用以加在时间戳后面。
    	{
    	    uid += Math.floor(Math.random()*10);
    	}
    	id = new Date().getTime() + uid;  //时间戳，用来生成id。
    	  alert(new Date().getTime());
    	
        var param = { id:id,officeaddress: $scope.officeaddress, city: $scope.city, registeredaddress: $scope.registeredaddress, Principaladdress: $scope.Principaladdress, Correspondenceaddress: $scope.Correspondenceaddress, telephone: $scope.telephone,Email: $scope.Email };
           console.log(param);
        $http.post("/camel/api/basicinfo", param).then(function successCallback(response) {
            	 if("success" == response.data.data) {
                   alert("保存成功.....")
                 } else {
                    alert("保存失败...");
                 }
            }, function errorCallback(response) {
            	alert("服务器故障，保存失败...");
        });
            
            
    }     
});
