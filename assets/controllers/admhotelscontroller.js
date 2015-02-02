// Datos de prueba
var offers = [
	{
		id: 1,
		name: 'Ripetta Rooms 1',
		path: 'assets/img/hotel.jpg',
		stars: 5,
		location: 'Madrid',
		price: '90',
		web: 'www.webhotel.com',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie et dui vitae porta. Etiam viverra suscipit libero vitae porta. Quisque consequat sapien eu eros porttitor interdum quis sit amet nisl. Cras posuere nisl sed ex consectetur, et porttitor nunc lacinia. Nulla accumsan auctor aliquet. Nunc pharetra pulvinar augue, quis euismod massa tempor feugiat. Quisque libero lacus, iaculis quis ullamcorper sed, dignissim quis lacus. Praesent rhoncus sodales lacinia. Phasellus et mi eget purus lacinia bibendum eget sit amet lorem.'
	},
	{
		id: 2,
		name: 'Ripetta Rooms 2',
		path: 'assets/img/hotel.jpg',
		stars: 5,
		location: 'Madrid',
		price: '90',
		web: 'www.webhotel.com',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie et dui vitae porta. Etiam viverra suscipit libero vitae porta. Quisque consequat sapien eu eros porttitor interdum quis sit amet nisl. Cras posuere nisl sed ex consectetur, et porttitor nunc lacinia. Nulla accumsan auctor aliquet. Nunc pharetra pulvinar augue, quis euismod massa tempor feugiat. Quisque libero lacus, iaculis quis ullamcorper sed, dignissim quis lacus. Praesent rhoncus sodales lacinia. Phasellus et mi eget purus lacinia bibendum eget sit amet lorem.'
	}
]

function admhotelscontroller($scope,$http,$location,$cookieStore){
	$scope.user = $cookieStore.get('user');
	$http.get('/api/business/?user='+$scope.user.id)
	.success(function(data, status, headers, config) {
		if(data!="null"){
			$scope.userBusiness = data;
			$http.get('/api/hotels/business/'+$scope.userBusiness.id)
			.success(function(data, status, headers, config) {
				$scope.hotels = data;
			}).error(function(data, status, headers, config) {
				console.log(data);
			});
		}else{
			document.location.href='/business.html';
		}
	}).error(function(data, status, headers, config) {
		console.log(data);
	});
	//$scope.hotels= offers;

	$scope.deleteHotel = function(id,name){

		$http({
			url: "/api/hotels/"+id,
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
		
		var hoteltemp = { 'name':$scope.newhotel.name,
								 'description': $scope.newhotel.description,
								 'rating':$scope.newhotel.rating,
								 'price':$scope.newhotel.price,
								 'url':$scope.newhotel.url,
								 'location':{'latitude':$scope.newhotel.latitude,
											 'longitude':$scope.newhotel.longitude},
								 'owner':$scope.userBusiness.id
						};
		$http.post('api/hotels',hoteltemp)
		.success(function(data, status, headers, config) {
			$scope.hotels.push(hoteltemp);
			// Limpia los datos del formulario
			delete $scope.newhotel;
			// Oculta el formulario para añadir hotel
			mostrar('formAdmHotel');
		}).error(function(data, status, headers, config) {
			alert(data.error);
		});
	};

	// Carga los datos del hotel seleccionado en el formulario de 'Modificar Hotel'
	$scope.updateFields = function(hotel){
		$scope.hotel = hotel;
		mostrar('formUpdateHotel');
	}

	$scope.updateHotel = function(){
		var hoteltemp = { 		 'id':$scope.hotel.id,
								 'name':$scope.hotel.name,
								 'description': $scope.hotel.description,
								 'rating':$scope.hotel.rating,
								 'price':$scope.hotel.price,
								 'url':$scope.hotel.url,
								 'location':{'latitude':$scope.hotel.location.latitude,
											 'longitude':$scope.hotel.location.longitude},
								 'owner':$scope.userBusiness.id
						};
		$http.put('api/hotels'+$scope.hotel.id ,hoteltemp)
		.success(function(data, status, headers, config) {
			$http.get('/api/hotels/business/'+$scope.userBusiness.id)
			.success(function(data, status, headers, config) {
				$scope.hotels = data;
				// Oculta el formulario para añadir hotel
				mostrar('formAdmHotel');
			}).error(function(data, status, headers, config) {
				console.log(data);
				alert(data.error);
			});
		}).error(function(data, status, headers, config) {
			alert(data.error);
		});
	}
}