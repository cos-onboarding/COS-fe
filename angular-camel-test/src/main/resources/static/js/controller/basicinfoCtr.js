app.controller("basicinfoCtr",function ($rootScope,$scope,$http) {
    $rootScope.isLandingPage = false;
    $scope.isLoggedin = false;
    $scope.isOneblank = true;
    //$scope.IsAddressOutsideHK="Yes";
    

	 $rootScope.isLandingPage = false;
	 
   $scope.saveInfo = function(){
   	var username =window.sessionStorage.getItem("username");
   	var password =window.sessionStorage.getItem("password");
   	var id =window.sessionStorage.getItem("application");
  
   
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
           		 alert("保存成功.....");
           		
           		 window.location.href="#!/baseinfo";
                } else {
               	 alert("保存失败...");
                }
           }, function errorCallback(response) {
           	("服务器故障，保存失败...");
       });
           
           
   }     

    

    $scope.records={}
    $scope.handleContinueBtn = function(){
    	window.location.href="#!/baseinfo";
    }
    $scope.baseinit = function(){
      var param = {application: window.sessionStorage.getItem("application")};
      $http.post("/camel/api/viewcontactdetail", param).then(function (response) {    	  
    	  console.log(response.data.infos[0]);
    	  var json_obj = $.xml2json(response.data.infos[0]);
//    	  console.log("aaa");
//    	  console.log(json_obj);
//    	  console.log("bbb");
    	  
         $scope.records=json_obj;
         $scope.IsAddressOutsideHK=$scope.records.IsAddressOutsideHK;
         if("Yes"==$scope.IsAddressOutsideHK){
        	 $scope.RegisteredOfficeAddress1=$scope.records.RegisteredOfficeAddress1;
        	 $scope.RegisteredOfficeAddress2=$scope.records.RegisteredOfficeAddress2;
        	 $scope.RegisteredOfficeAddress3=$scope.records.RegisteredOfficeAddress3;
        	 $scope.RegisteredCountry=$scope.records.RegisteredCountry;
        	 $scope.RegisteredPostalCode=$scope.records.RegisteredPostalCode;
         }
         if("No"==$scope.IsAddressOutsideHK){
        	 $scope.IsStandardAddressFormat=$scope.records.IsStandardAddressFormat;
        	 if("Yes" == $scope.IsStandardAddressFormat){
        		 $scope.RegisteredOfficeAddress=$scope.records.RegisteredOfficeAddress;
        		 $scope.RegisteredOfficeAddress0=$scope.records.RegisteredOfficeAddress0;
        		 $scope.RegisteredOfficeFloor=$scope.records.RegisteredOfficeFloor;
        		 $scope.RegisteredOfficeBlock=$scope.records.RegisteredOfficeBlock;
        		 $scope.RegisteredOfficebuilding=$scope.records.RegisteredOfficebuilding;
        		 $scope.RegisteredOfficeStreet=$scope.records.RegisteredOfficeStreet;
        		 $scope.RegisteredOfficeDistrict=$scope.records.RegisteredOfficeDistrict;
        	 }else{
        		 $scope.RegisteredOfficeAddress1=$scope.records.RegisteredOfficeAddress1;
        		 $scope.RegisteredOfficeAddress2=$scope.records.RegisteredOfficeAddress2;
        		 $scope.RegisteredOfficeAddress3=$scope.records.RegisteredOfficeAddress3;
        		 $scope.RegisteredDistrict=$scope.records.RegisteredDistrict;
        	 }
         }
         $scope.IsPBAddressSameAsROAddress=$scope.records.IsPBAddressSameAsROAddress;
         if("OtherAddress"==$scope.IsPBAddressSameAsROAddress){
        	 $scope.IsAddressOutsideHK_pb=$scope.records.IsAddressOutsideHK_pb;
        	 if("Yes"==$scope.IsAddressOutsideHK_pb){
        		 $scope.PrincipalBusinessAddress1=$scope.records.PrincipalBusinessAddress1;
        		 $scope.PrincipalBusinessAddress2=$scope.records.PrincipalBusinessAddress2;
        		 $scope.PrincipalBusinessAddress3=$scope.records.PrincipalBusinessAddress3;
        		 $scope.PrincipalBusinessCountry=$scope.records.PrincipalBusinessCountry;
        		 $scope.PrincipalBusinessPostalCode=$scope.records.PrincipalBusinessPostalCode;
        	 }else{
        		 $scope.IsStandardAddressFormat_pb=$scope.records.IsStandardAddressFormat_pb;
        		 if("Yes"==$scope.IsStandardAddressFormat_pb){
        			 $scope.PrincipalBusinessAddress=$scope.records.PrincipalBusinessAddress;
        			 $scope.PrincipalBusinessAddress0=$scope.records.PrincipalBusinessAddress0;
        			 $scope.PrincipalBusinessFloor=$scope.records.PrincipalBusinessFloor;
        			 $scope.PrincipalBusinessBlock=$scope.records.PrincipalBusinessBlock;
        			 $scope.PrincipalBusinessBuilding=$scope.records.PrincipalBusinessBuilding;
        			 $scope.PrincipalBusinessStreet=$scope.records.PrincipalBusinessStreet;
        			 $scope.PrincipalBusinessDistrict=$scope.records.PrincipalBusinessDistrict;
        		 }else{
        			 $scope.PrincipalBusinessAddress1=$scope.records.PrincipalBusinessAddress1;
        			 $scope.PrincipalBusinessAddress2=$scope.records.PrincipalBusinessAddress2;
        			 $scope.PrincipalBusinessAddress3=$scope.records.PrincipalBusinessAddress3;
        			 $scope.PrincipalBusinessDistrict=$scope.records.PrincipalBusinessDistrict;
        		 }
        	 }
         }
         $scope.IsAddressAsRegisterOrPB=$scope.records.IsAddressAsRegisterOrPB;
         if("OtherAddress" == $scope.IsAddressAsRegisterOrPB){
        	 $scope.IsAddressOutsideHK_Cor=$scope.records.IsAddressOutsideHK_Cor;
        	 if("Yes"==$scope.IsAddressOutsideHK_Cor){
        		 $scope.CorrespondenceAddress1=$scope.records.CorrespondenceAddress1;
        		 $scope.CorrespondenceAddress2=$scope.records.CorrespondenceAddress2;
        		 $scope.CorrespondenceAddress3=$scope.records.CorrespondenceAddress3;
        		 $scope.CorrespondenceCountry=$scope.records.CorrespondenceCountry;
        		 $scope.CorrespondencePostalCode=$scope.records.CorrespondencePostalCode;
        	 }else{
        		 $scope.IsStandardAddressFormat_Cor=$scope.records.IsStandardAddressFormat_Cor;
        		 if("Yes"==$scope.IsStandardAddressFormat_Cor){
        			 $scope.CorrespondenceAddress=$scope.records.CorrespondenceAddress;
        			 $scope.CorrespondenceAddress0=$scope.records.CorrespondenceAddress0;
        			 $scope.CorrespondenceFloor=$scope.records.CorrespondenceFloor;
        			 $scope.CorrespondenceBlock=$scope.records.CorrespondenceBlock;
        			 $scope.CorrespondenceBuilding=$scope.records.CorrespondenceBuilding;
        			 $scope.CorrespondenceStreet=$scope.records.CorrespondenceStreet;
        			 $scope.CorrespondenceDistrict=$scope.records.CorrespondenceDistrict;
        		 }else{
        			 $scope.CorrespondenceAddress1=$scope.records.CorrespondenceAddress1;
        			 $scope.CorrespondenceAddress2=$scope.records.CorrespondenceAddress2;
        			 $scope.CorrespondenceAddress3=$scope.records.CorrespondenceAddress3;
        			 $scope.CorrespondenceDistrict=$scope.records.CorrespondenceDistrict;
        		 }
        	 }
         }
         $scope.ContactTelCompany=$scope.records.ContactTelCompany;
         $scope.ContactTel_header=$scope.records.ContactTel_header;
         $scope.ContactTel_body=$scope.records.ContactTel_body;
         $scope.ContactFaxNo_header=$scope.records.ContactFaxNo_header;
         $scope.ContactFaxNo_body=$scope.records.ContactFaxNo_body;
         $scope.ContactEmail=$scope.records.ContactEmail;
         $scope.ContactWebsite=$scope.records.ContactWebsite;
         
         console.log($scope.records);
          // console.log(response);
          console.log("basic");          
              
      }).catch(function(){
          
      });
  }
})