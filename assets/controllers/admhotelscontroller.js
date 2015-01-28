// Datos de prueba
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
	$scope.userID = 1;
	$scope.hotelID = 1;

	/*$http({
	    url: "/api/business/"+$scope.userID,
	    method: "GET"
	}).success(function(data, status, headers, config) {
	    $scope.hotels = data.hotels;
	    console.log("hotel data received: " + data);
	}).error(function(data, status, headers, config) {
	    alert(data.error);
	});*/

	$scope.deleteHotel = function(name){

		$http({
			url: "/api/hotels/"+$scope.hotelID,
			method: "DELETE"
		}).success(function(data, status, headers, config) {
			var index = -1;		
			var comArr = eval( $scope.hotels );
			for( var i = 0; i < comArr.length; i++ ) {
				if( comArr[i].name === name ) {
					index = i;
					break;
				}
			}
			if( index === -1 ) {
				alert( "Algo fue mal" );
			}
			$scope.hotels.splice( index, 1 );	
		}).error(function(data, status, headers, config) {
			alert(data.error);
		});
		
	};

	$scope.createHotel = function(){
		
		var hoteltemp = { 'name':$scope.hotel.name,
								 'description': $scope.hotel.description,
								 'rating':$scope.hotel.rating,
								 'price':$scope.hotel.price,
								 'url':$scope.hotel.url,
								 'location':{'latitude':$scope.hotel.latitude,
											 'longitude':$scope.hotel.longitude}	
					}
		$http.post('api/hotels',hoteltemp)
		.success(function(data, status, headers, config) {
			$scope.hotels.push(hoteltemp);
			// Limpia los datos del formulario
			$scope.hotel = "";
			// Oculta el formulario para añadir hotel
			ocultar();
		}).error(function(data, status, headers, config) {
			alert(data.error);
		});
	}
}