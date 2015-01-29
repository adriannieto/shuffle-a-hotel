var app = angular.module('shuffleahotel',['ngCookies']);

app.controller('globalcontroller', ['$http','$cookieStore', function($http, $cookieStore) {
	this.authenticated = $cookieStore.get('user');

	this.logout = function(){
		$http.get('api/logout').success(function(data, status, headers, config) {
		    $cookieStore.remove('user');
			document.location.href = '/index.html';
		}).error(function(data, status, headers, config) {
		    alert(data);
		});
	}
}]);