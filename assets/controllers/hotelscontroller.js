function hotelscontroller($scope,$http){
	$scope.hotels={};
	$http({
	    url: "api/hotels",
	    method: "GET"
	}).success(function(data, status, headers, config) {
	    $scope.hotels = data;
	    console.log("hotel data received: " + data);
	}).error(function(data, status, headers, config) {
	    alert("AJAX failed!");
	});
}