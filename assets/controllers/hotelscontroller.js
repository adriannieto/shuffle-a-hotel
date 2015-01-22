function hotelscontroller($scope,$http){
	$scope.hotels={};
	$http({
	    url: "http://localhost:1337/api/hotels",
	    method: "GET"
	}).success(function(data, status, headers, config) {
	    $scope.hotels = data;
	    console.log(this.hotels);
	}).error(function(data, status, headers, config) {
	    alert("AJAX failed!");
	});
}