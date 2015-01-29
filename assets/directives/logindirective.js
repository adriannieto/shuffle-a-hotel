app.directive('login',function(){
	return({
		restrict: 'E',
		templateUrl: 'views/login-form.html',
		controller: logincontroller,
		controllerAs: 'loginCtrl'
	});
});