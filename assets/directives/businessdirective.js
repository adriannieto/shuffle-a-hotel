app.directive('business',function(){
	return({
		restrict: 'E',
		templateUrl: 'views/business-form.html',
		controller: businesscontroller,
		controllerAs: 'businessCtrl'
	});
});