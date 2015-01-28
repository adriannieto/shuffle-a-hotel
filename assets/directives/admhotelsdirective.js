app.directive('admhotels',function(){
	return({
		restrict: 'E',
		templateUrl: 'views/admhotels-form.html',
		controller: admhotelscontroller,
		controllerAs: 'admhotelsCtrl'
	});
});