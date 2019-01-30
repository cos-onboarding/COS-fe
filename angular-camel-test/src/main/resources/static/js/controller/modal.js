app.controller('Modalsssss', function($scope,$rootScope,$http,$state) {
	$scope.ok=function(type){
		//console.log(type);
		//$rootScope.data = "3333";
		$rootScope.$emit("modal_delete_ok",type);
		$('#myModal').modal('hide');
	};
	$scope.cancel=function(type){
		//console.log(type);
		$('#myModal').modal('hide');
	}
});