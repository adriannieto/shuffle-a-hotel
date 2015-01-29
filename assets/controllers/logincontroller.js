function logincontroller($scope,$http,$cookieStore){
	$scope.login = function(){
		$http.post('api/login',$scope.user)
		.success(function(data, status, headers, config) {
			$cookieStore.put('user',data);
			document.location.href = '/index.html';
		}).error(function(data, status, headers, config) {
			alert(data.error);
		});
	}
}
