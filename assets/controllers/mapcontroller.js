function mapcontroller($scope,$http){
	$scope.hotels={};
	$http({
	    url: "api/hotels",
	    method: "GET"
	}).success(function(data, status, headers, config) {
	    $scope.hotels = data;
	    console.log("hotel data received: " + data);
	    var mapOptions = {
	    	zoom: 4,
	    	center: new google.maps.LatLng(40.402699, -3.700729)
	    };
	    map = new google.maps.Map(document.getElementById('map'),mapOptions);
	    var image = 'assets/img/hotelIcon.png';
	    var contentString;
	    var infowindows = [];
	    $scope.hotels.forEach(function(hotel){
			if(hotel.location){
	    		contentString = createContentString(hotel);
	    		var infowindow = new google.maps.InfoWindow({
	    			content: contentString
	    		});
	    		var marker = new google.maps.Marker({
	    			position: new google.maps.LatLng(hotel.location.latitude, hotel.location.longitude),
	    			map: map,
	    			title: hotel.name,
	    			icon: image
	    		});
	    		google.maps.event.addListener(marker, 'click', function() {
	    			infowindow.open(map,marker);
	    		});
	    		google.maps.event.addListener(map, 'click', function() {
	    			infowindow.close();
	    		});
	    		// TODO: Close on clicking on the map
	    	}
	    });
	    $('#maptoggle').click(function(){
	    	google.maps.event.trigger(map, 'resize');
	    	map.setCenter(new google.maps.LatLng(40.402699, -3.700729));
	    });
	}).error(function(data, status, headers, config) {
	    alert("AJAX failed!");
	});
}

function createContentString(hotel){
	imgString = (hotel.img) ? hotel.img : 'assets/img/hotel.jpg';
	contentString ='<div class="panel panel-success">' +
	    '<div class="panel-heading">' +
	        '<h1 style="font-size: 24px;" class="panel-title">'+hotel.name+'</h1>' +
	    '</div>' +
	    '<div class="panel-body">'+
	        '<div class="col-md-6">' +
	        '<div style="width: 50%;"><img src="'+imgString+'" style="width: 100%"></div></div>' +
	        '<div class="col-md-6" style="padding-top: 5px;"><p><b>Estrellas: '+hotel.rating+' - '+hotel.price+'€/noche </b></p>'+
	        '<p>'+hotel.description+'</p></div>'+
	    '</div>'+
	'</div>';
	return contentString;
}