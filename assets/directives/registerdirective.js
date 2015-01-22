app.directive('register',function(){
	return({
		restrict: 'E',
		templateUrl: 'views/register-form.html',
		controller: function($scope){
			var users = $scope.users = [];

			$scope.add = function(user) {
				users.push(user);
			};
		},
		controllerAs: 'registerCtrl'
	});


});