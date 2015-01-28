var offers = [
	{
		name: 'Ripetta Rooms 1',
		path: 'assets/img/hotel.jpg',
		stars: 5,
		location: 'Madrid',
		price: '90',
		web: 'www.webhotel.com',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie et dui vitae porta. Etiam viverra suscipit libero vitae porta. Quisque consequat sapien eu eros porttitor interdum quis sit amet nisl. Cras posuere nisl sed ex consectetur, et porttitor nunc lacinia. Nulla accumsan auctor aliquet. Nunc pharetra pulvinar augue, quis euismod massa tempor feugiat. Quisque libero lacus, iaculis quis ullamcorper sed, dignissim quis lacus. Praesent rhoncus sodales lacinia. Phasellus et mi eget purus lacinia bibendum eget sit amet lorem.'
	},
	{
		name: 'Ripetta Rooms 2',
		path: 'assets/img/hotel.jpg',
		stars: 5,
		location: 'Madrid',
		price: '90',
		web: 'www.webhotel.com',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie et dui vitae porta. Etiam viverra suscipit libero vitae porta. Quisque consequat sapien eu eros porttitor interdum quis sit amet nisl. Cras posuere nisl sed ex consectetur, et porttitor nunc lacinia. Nulla accumsan auctor aliquet. Nunc pharetra pulvinar augue, quis euismod massa tempor feugiat. Quisque libero lacus, iaculis quis ullamcorper sed, dignissim quis lacus. Praesent rhoncus sodales lacinia. Phasellus et mi eget purus lacinia bibendum eget sit amet lorem.'
	}
]

function admhotelscontroller($scope,$http,$location){
	$scope.hotels= offers;

	/*$http({
	    url: "api/hotels?page="+$scope.page+"&limit="+$scope.limit,
	    method: "GET"
	}).success(function(data, status, headers, config) {
	    $scope.hotels = data;
	    console.log("hotel data received: " + data);
	}).error(function(data, status, headers, config) {
	    alert("AJAX failed!");
	});*/	
}