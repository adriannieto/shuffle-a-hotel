function mapcontroller($scope,$http){
	$scope.hotels={};
	$http({
	    url: "http://localhost:1337/api/hotels",
	    method: "GET"
	}).success(function(data, status, headers, config) {
	    $scope.hotels = data;
	    console.log("hotel data received: " + data);
	    var mapOptions = {
	    	zoom: 4,
	    	center: new google.maps.LatLng(40.402699, -3.700729)
	    };
	    map = new google.maps.Map(document.getElementById('map'),mapOptions);
	    console.log("Hola");
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
	contentString = '<div class="col-md-6"><h1 style="margin-top: 0px;">'+hotel.name+'</h1>';
	if(hotel.img){
		contentString += '<div style="width: 50%;"><img src="'+hotel.img+'" style="width: 100%"></div></div>';
	}else{
		contentString += '<div style="display: inline-block;"><img src="assets/img/hotel.jpg" style="width: 50%"></div></div>';
	}
	contentString += '<div class="col-md-6" style="padding-top: 5px;"><p><b>Estrellas: '+hotel.rating+' - ';
	contentString += hotel.price+'€/noche </b></p>';
	contentString += '<p>'+hotel.description+'</p></div>';
	return contentString;
}