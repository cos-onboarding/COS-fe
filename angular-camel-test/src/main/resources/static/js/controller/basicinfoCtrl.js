app.controller("basicinfoCtrl",function ($rootScope,$scope,$http) {
	$rootScope.isLandingPage = false;
	$scope.isSaved =true;
	 
    $scope.saveInfo = function(){
    	var username =window.sessionStorage.getItem("username");
    	var password =window.sessionStorage.getItem("password");
    	var uid="";  
    	for(var i=0;i<8;i++){//8位随机数，用以加在时间戳后面。
    	
    	    uid += Math.floor(Math.random()*10);
    	}
    	id = new Date().getTime() + uid; // 时间戳，用来生成id。
    
    	 var param = { username:username,password:password,
    			 id:id,IsAddressOutsideHK:$scope.IsAddressOutsideHK, 
	    	RegisteredOfficeAddress1: $scope.RegisteredOfficeAddress1,
	    	RegisteredOfficeAddress2: $scope.RegisteredOfficeAddress2,
	    	RegisteredOfficeAddress3: $scope.RegisteredOfficeAddress3,
	    	RegisteredCountry: $scope.RegisteredCountry, 
	    	RegisteredPostalCode:$scope.RegisteredPostalCode, 
	    	IsStandardAddressFormat:$scope.IsStandardAddressFormat,  
	    	RegisteredOfficeAddress:$scope.RegisteredOfficeAddress,
	    	RegisteredOfficeAddress0:$scope.RegisteredOfficeAddress0,
	    	RegisteredOfficeFloor:$scope.RegisteredOfficeFloor,
	    	RegisteredOfficeBlock:$scope.RegisteredOfficeBlock,
	    	RegisteredOfficebuilding:$scope.RegisteredOfficebuilding,
	    	RegisteredOfficeStreet:$scope.RegisteredOfficeStreet,
	    	RegisteredOfficeDistrict:$scope.RegisteredOfficeDistrict,
	    	RegisteredOfficeAddress1: $scope.RegisteredOfficeAddress1,
	    	RegisteredOfficeAddress2:$scope.RegisteredOfficeAddress2,
	    	RegisteredOfficeAddress3:$scope.RegisteredOfficeAddress3,
	    	RegisteredDistrict:$scope.RegisteredDistrict,
	    	IsPBAddressSameAsROAddress:$scope.IsPBAddressSameAsROAddress,
	    	IsAddressOutsideHK_pb:$scope.IsAddressOutsideHK_pb,
	    	PrincipalBusinessAddress1:$scope.PrincipalBusinessAddress1,
	    	PrincipalBusinessAddress2:$scope.PrincipalBusinessAddress2,
	    	PrincipalBusinessAddress3:$scope.PrincipalBusinessAddress3,
	    	PrincipalBusinessCountry:$scope.PrincipalBusinessCountry,
	    	PrincipalBusinessPostalCode:$scope.PrincipalBusinessPostalCode,
	    	  
	    	IsStandardAddressFormat_pb:$scope.IsStandardAddressFormat_pb,
	    	PrincipalBusinessAddress:$scope.PrincipalBusinessAddress,
	    	PrincipalBusinessAddress0:$scope.PrincipalBusinessAddress0,
	    	  
	    	  
	    	PrincipalBusinessFloor:$scope.PrincipalBusinessFloor,
	    	PrincipalBusinessBlock:$scope.PrincipalBusinessBlock,
	    	PrincipalBusinessBuilding:$scope.PrincipalBusinessBuilding,
	    	PrincipalBusinessStreet: $scope.PrincipalBusinessStreet,                 
	    	PrincipalBusinessDistrict:$scope.PrincipalBusinessDistrict,                
	    	
	    	PrincipalBusinessAddress1:$scope.PrincipalBusinessAddress1,                 
	    	PrincipalBusinessAddress2:$scope.PrincipalBusinessAddress2,                 
	    	PrincipalBusinessAddress3:$scope.PrincipalBusinessAddress3,                  
	    	PrincipalBusinessDistrict:$scope.PrincipalBusinessDistrict,                   
	    	IsAddressAsRegisterOrPB:$scope.IsAddressAsRegisterOrPB,                 
	    	IsAddressOutsideHK_Cor:$scope.IsAddressOutsideHK_Cor ,                  
	    	CorrespondenceAddress1:$scope.CorrespondenceAddress1,                   
	    	CorrespondenceAddress2:$scope.CorrespondenceAddress2,                   
	    	CorrespondenceAddress3:$scope.CorrespondenceAddress3,                   
	    	CorrespondenceCountry:$scope.CorrespondenceCountry ,                  
	    	CorrespondencePostalCode:$scope.CorrespondencePostalCode ,                 
	    	StandardAddressFormat_Cor:$scope.StandardAddressFormat_Cor,                 
	    	
	    	CorrespondenceAddress:$scope.CorrespondenceAddress,               
	    	CorrespondenceAddress0:$scope.CorrespondenceAddress0,                   
	    	CorrespondenceFloor:$scope.CorrespondenceFloor ,                  
	    	CorrespondenceBlock:$scope.CorrespondenceBlock ,                  
	    	CorrespondenceBuilding:$scope.CorrespondenceBuilding  ,                 
	    	CorrespondenceStreet:$scope.CorrespondenceStreet ,                  
	    	CorrespondenceDistrict:$scope.CorrespondenceDistrict,                   
	    	CorrespondenceAddress1:$scope.CorrespondenceAddress1,                   
	    	CorrespondenceAddress2:$scope.CorrespondenceAddress2 ,                  
	    	CorrespondenceAddress3:$scope.CorrespondenceAddress3 ,                  
	    	CorrespondenceDistrict:$scope.CorrespondenceDistrict ,                    
	    	ContactTelCompany:$scope.ContactTelCompany   ,                
	    	ContactTel_body:$scope.ContactTel_body ,                  
	    	ContactFaxNo_body:$scope.ContactFaxNo_body ,                  
	    	ContactEmail:$scope.ContactEmail ,  
	    	ContactTel_header:$scope.ContactTel_header,
	    	ContactFaxNo_header:$scope.ContactFaxNo_header,
	    	
	    	ContactWebsite:$scope.ContactWebsite};              

        $http.post("/camel/api/basicinfo", param).then(function successCallback(response) {
        	
            	 if("success" == response.data) {
            		 $scope.isSaved =false;
            		 $scope.dateTime = new Date();
            		 window.location.href="#!/baseinfo";
                 } else {
                	 alert("保存失败...");
                 }
            }, function errorCallback(response) {
            	//("服务器故障，保存失败...");
        });
        
            
            
    }     
});
