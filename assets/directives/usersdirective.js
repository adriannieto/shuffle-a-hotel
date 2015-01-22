app.directive('register',function(){
	return({
		restrict: 'E',
		templateUrl: 'views/register-form.html',
		controller: userscontroller,
		controllerAs: 'usersCtrl'
	});
});