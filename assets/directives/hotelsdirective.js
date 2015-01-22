app.directive('hotels',function(){
	return({
		restrict: 'E',
		templateUrl: 'views/hotels.html',
		controller: hotelscontroller,
		controllerAs: 'hotelCtrl'
	});
});