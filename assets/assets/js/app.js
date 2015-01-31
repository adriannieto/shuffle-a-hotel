var app = angular.module('shuffleahotel',['ngCookies']);

app.controller('globalcontroller', ['$http','$cookieStore', function($http, $cookieStore) {
	this.user = $cookieStore.get('user');
	var path = (location.pathname+location.search).substr(1);
	if(!this.user && (path == "admhotels.html" || path == "business.html")) {
		document.location.href = '/login.html';
	}
	if(this.user && (path == "login.html" || path == "register.html")) {
		document.location.href = '/index.html';
	}

	this.logout = function(){
		$http.get('api/logout').success(function(data, status, headers, config) {
		    $cookieStore.remove('user');
			document.location.href = '/index.html';
		}).error(function(data, status, headers, config) {
		    alert(data);
		});
	}
}]);