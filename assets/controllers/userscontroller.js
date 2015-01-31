function userscontroller($scope,$http,$location){

	$scope.createNewUser = function(){
		if($scope.user.password == $scope.user.checkpassword){
			$http.post('api/users',$scope.user)
			.success(function(data, status, headers, config) {
				document.location.href = '/login.html';
			}).error(function(data, status, headers, config) {
				alert(data.error);
			});	
		}else{
			alert("La contraseña no coincide");
		}
	}
}


