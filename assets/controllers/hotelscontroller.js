function hotelscontroller($scope,$http){
	$scope.hotels={};
	$scope.page=1;
	$scope.limit=5;
	$scope.starsFilter = 0;

	$scope.loadHotels = function(callback){
		$http({
		    url: "api/hotels?page="+$scope.page+"&limit="+$scope.limit+"&stars="+$scope.starsFilter,
		    method: "GET"
		}).success(function(data, status, headers, config) {
		    $scope.hotels = data;
		    console.log("hotel data received: " + data);
		    callback();
		}).error(function(data, status, headers, config) {
		    alert("AJAX failed!");
		});
	}
	$scope.loadHotels(function(){});

	$scope.updateCards = function(){
		var cardHandler = $scope.$watch("hotels", function () {
	        updateBaraja($scope.hotels,$scope.limit,$scope.page);
	        cardHandler();
	    });
	}

	this.previousBaraja = function(){
		$scope.page=$scope.page-1;
		$http({
		    url: "api/hotels?page="+$scope.page+"&limit="+$scope.limit+"&stars="+$scope.starsFilter,
		    method: "GET"
		}).success(function(data, status, headers, config) {
		    $scope.hotels = data;
		    console.log("hotel data received: " + data);
		    $scope.updateCards();
		}).error(function(data, status, headers, config) {
		    alert("AJAX failed!");
		});
	};
	
	this.nextBaraja = function(){
		$scope.page=$scope.page+1;
		$http({
		    url: "api/hotels?page="+$scope.page+"&limit="+$scope.limit+"&stars="+$scope.starsFilter,
		    method: "GET"
		}).success(function(data, status, headers, config) {
		    $scope.hotels = data;
		    console.log("hotel data received: " + data);
		    $scope.updateCards();
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
