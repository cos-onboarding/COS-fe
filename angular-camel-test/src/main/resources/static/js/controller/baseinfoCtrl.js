app.controller('ModalCtrl', function( $uibModalInstance, data) {
	var $ctrl = this;
	$ctrl.data= data;
	$ctrl.ok = function() {
    	$uibModalInstance.close("ok");
    };
    $ctrl.cancel = function() {
    	$uibModalInstance.dismiss('cancel');
    }
});

app.controller("baseinfoCtrl",['$rootScope','$scope', '$http', '$uibModal',function ($rootScope,$scope,$http,$uibModal) {
	var data = "appid";
	$rootScope.isLandingPage = false;
    $scope.animationsEnabled = true;
  
    $scope.delinfo = function(size, parentSelector){
    	//console.log("appid:":appid);
    	 var parentElem = parentSelector;
    	var modalInstance=$uibModal.open({
    	      //animation: ture,
    	      ariaLabelledBy: 'modal-title-bottom',
    	      ariaDescribedBy: 'modal-body-bottom',
    	      templateUrl: 'stackedModal.html',
    	      controller : 'ModalCtrl',
    	      controllerAs: '$ctrl',
    	      //backdrop:false,
    	      size: size,
    	      resolve : {
                  data : function() {//data作为modal的controller传入的参数
                       return data;//用于传递数据
                  }
              }
    	});
    	 modalInstance.result.then(function (a) {
    		 //console.log("ljx"+a);
    		 var param = {application:parentElem}
    		 if("ok"==a){
    			 $http.post("/camel/api/delinfo", param).then(function(response) {
    	            
    	    		console.log("del_begin");
    	            console.log(response);
    	            console.log("del_end"); 
    	            $scope.appinit();
    	                
    			 }).catch(function(){
    	            
    			 });
    		 }
    	 }, function () {
    	      console.log('modal-component dismissed at: ' + new Date());
    	 });
    }

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
    
//    $scope.delinfo = function(appid){
//    	let param = {application:appid}
//    	$http.post("/camel/api/delinfo", param).then(function(response) {
//            
//    		console.log("del_begin");
//            console.log(response);
//            console.log("del_end"); 
//            $scope.appinit();
//                
//        }).catch(function(){
//            
//        });
//    }
   
}])