function hotelscontroller($scope,$http){
	$scope.hotels={};
	$scope.page=1;
	$scope.limit=5;

	$http({
	    url: "api/hotels?page="+$scope.page+"&limit="+$scope.limit,
	    method: "GET"
	}).success(function(data, status, headers, config) {
	    $scope.hotels = data;
	    console.log("hotel data received: " + data);
	}).error(function(data, status, headers, config) {
	    alert("AJAX failed!");
	});

	this.previousBaraja = function(){
		$scope.page=$scope.page-1;
		$http({
		    url: "api/hotels?page="+$scope.page+"&limit="+$scope.limit,
		    method: "GET"
		}).success(function(data, status, headers, config) {
		    $scope.hotels = data;
		    console.log("hotel data received: " + data);
		    var cardHandler = $scope.$watch("hotels", function () {
		        updateBaraja($scope.hotels,$scope.limit,$scope.page);
		        cardHandler();
		    });
		}).error(function(data, status, headers, config) {
		    alert("AJAX failed!");
		});
	};
	
	this.nextBaraja = function(){
		$scope.page=$scope.page+1;
		$http({
		    url: "api/hotels?page="+$scope.page+"&limit="+$scope.limit,
		    method: "GET"
		}).success(function(data, status, headers, config) {
		    $scope.hotels = data;
		    console.log("hotel data received: " + data);
		    var cardHandler = $scope.$watch("hotels", function () {
		        updateBaraja($scope.hotels,$scope.limit,$scope.page);
		        cardHandler();
		    });
		}).error(function(data, status, headers, config) {
		    alert("AJAX failed!");
		});
	};
}

function updateBaraja(hotels,limit,page){
	setBaraja();
	if(page>1){
		$('#previousBaraja').css('display','inline-block');
	}else{
		$('#previousBaraja').hide();
	}
	if(hotels.length<limit){
		$('#nextBaraja').hide();
	}
}
