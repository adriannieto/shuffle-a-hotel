function businesscontroller($cookieStore,$scope,$http,$location){
	$scope.user = $cookieStore.get('user');
	$http.get('/api/business/?user='+$scope.user.id)
	.success(function(data, status, headers, config) {
		if(data!="null"){
			$scope.userBusiness = data;
		}
	}).error(function(data, status, headers, config) {
		console.log(data);
	});

	$scope.createNewBusiness = function(){
		$scope.business.user=$scope.user.id;
		$http.post('/api/business',$scope.business)
		.success(function(data, status, headers, config) {
			alert("Cadena creada con éxito");
			document.location.href = '/business.html';
		}).error(function(data, status, headers, config) {
			console.log(data);
		});
	}

	$scope.deleteBusiness =function(){
		var r = confirm("¿Estás seguro de que quieres eliminar tu cadena? Se eliminarán con ella todos sus hoteles.");
		if(r){
			$http.delete('/api/business/'+$scope.userBusiness.id)
			.success(function(data, status, headers, config) {
				alert("Cadena eliminada con éxito");
				document.location.href = '/business.html';
			}).error(function(data, status, headers, config) {
				console.log(data);
			});
		}
	}
}


