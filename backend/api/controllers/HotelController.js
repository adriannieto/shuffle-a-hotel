/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 */

module.exports = {
	
	listHotels: function(req, res){
		// TODO: Add filter criteras
		Hotel.find(function(err, hotels){
            if (err){
				res.json({error: 'Unexpected error'}, 500);
            }
			
			return res.send(hotels);			 
		});
	},
	
	getHotel: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	addHotel: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	updateHotel: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	removeHotel: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	}
	
};

