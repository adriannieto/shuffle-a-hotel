function userscontroller($scope,$http,$location){

	$scope.createNewUser = function(){
		$http.post('api/users',$scope.user)
		.success(function(data, status, headers, config) {
			alert("success");
		}).error(function(data, status, headers, config) {
			alert(data);
		});
	}
}


