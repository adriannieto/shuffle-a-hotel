var offers = [];

function userscontroller($scope,$http,$location){

	$scope.createNewUser = function(){

		$http({
			url: "api/users",
			method: "POST"
		}).success(function(user, status, headers, config) {
			$location.path('/api/users');
		}).error(function(data, status, headers, config) {
			alert("AJAX failed!");
		});
	}
}


