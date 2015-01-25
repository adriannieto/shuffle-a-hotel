/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 */

module.exports = {
	
	listHotels: function(req, res){
		// TODO: Add filter criteras
		
		var limitParam = (!req.params.limit)? 5 : req.params.limit;
		var pageParam = (!req.params.page)? 0 : req.params.page;
		
		Hotel.find().paginate({limit : limitParam, page :pageParam}).exec(function(err, hotels){
            if (err){
				res.json({error: 'Unexpected error'}, 500);
            }
			
			return res.send(hotels);			 
		});
	},
	
	getHotel: function(req, res){
		Hotel.findOne({id : req.params.id}).populateAll().exec(function(err, hotel){
            if (err){
				res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!hotel){
				res.json({error: 'Invalid hotel ID'});
			}
			
			return res.send(hotel);			 
		});
	},
	
	addHotel: function(req, res){	  
		if(!req.body){
			res.json({error: 'Invalid hotel ID'});
		}
				
		Hotel.create(req.body).exec(function(err, hotel){
            if (err){
				res.json({error: 'Cannot create the Hotel'}, 500);
            }
			
			return res.send(hotel);			 
		})

	},
	
	updateHotel: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	removeHotel: function(req, res){
		Hotel.destroy({id : req.params.id}).exec(function(err, hotel){
            if (err){
				res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!hotel){
				res.json({error: 'Invalid hotel ID'});
			}
			
			return res.send(hotel);			 
		});
	}
	
};

