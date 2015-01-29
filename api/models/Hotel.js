/**
* Hotel.js
*
* @description :: An Hotel included on shuffle-a-hotel platform.
*/

module.exports = {
  schema: true,
	
  types: {
  	is_geopoint: function(point){
    	return point.latitude && point.latitude >= -90 && point.latitude <= 90
		&& point.longitude && point.longitude >= -180 && point.longitude <= 180;
    }
  },
  attributes: {
	  name: {
		type: 'string',
		notEmpty: true,
		required: true
	  },
	  description: {
		type: 'string',
		notEmpty: true,
		required: true
	  },
	  rating: {
		type: 'integer',		
		defaultsTo: 1,
		min: 1,
		max: 5,
		required: true
	  },
	  price: {
	  	type: 'float',
	  	min: 1,
	  	required: true
	  },
	  url:{
		type: 'string',
		required: true,
		url: true
	  },
	  // location example: location = {latitude : 30, longitude : 10}
	  location: {
		type: 'json',
		is_geopoint : true
	  },
	  //TODO: Define an array of pictures
	  picture:{
		type: 'binary',
	  },
      owner:{
          model:'Business'
      }
  }
};

