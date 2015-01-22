app.directive('map',function(){
	return({
		restrict: 'E',
		templateUrl: 'views/map.html',
		controller: mapcontroller,
		controllerAs: 'mapCtrl'
	});
});