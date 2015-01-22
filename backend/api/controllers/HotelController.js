/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 */

module.exports = {
	
	listHotels: function(req, res){
		// TODO: Add filter criteras
		
		var limitParam = (!req.query.limit)? 5 : req.query.limit;
		var pageParam = (!req.query.page)? 0 : req.query.page;
		
		Hotel.find().paginate({limit : limitParam, page :pageParam}).exec(function(err, hotels){
            if (err){
				res.json({error: 'Unexpected error'}, 500);
            }
			
			return res.send(hotels);			 
		});
	},
	
	getHotel: function(req, res){
		Hotel.findOne({id : req.params.id}).exec(function(err, hotel){
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
		if(!req.body.hotel){
			res.json({error: 'Invalid hotel ID'});
		}
				
		Hotel.create(req.body.hotel).exec(function(err, hotel){
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
		Hotel..destroy({id : req.params.id}).exec(function(err, hotel){
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

