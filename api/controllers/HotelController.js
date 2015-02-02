/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 */

module.exports = {
	
	listHotels: function(req, res){
		// TODO: Add filter criteras

		var limitParam = (!req.query.limit)? 0 : req.query.limit;
		var pageParam = (!req.query.page)? 0 : req.query.page;
		
		Hotel.find().paginate({limit : limitParam, page :pageParam}).exec(function(err, hotels){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            }
			
			return res.send(hotels);			 
		});
	},
	
	getHotel: function(req, res){
		Hotel.findOne({id : req.params.id}).populateAll().exec(function(err, hotel){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!hotel){
				return res.json({error: 'Invalid hotel ID'});
			}
			
			return res.send(hotel);			 
		});
	},

	getHotelsByBusiness: function(req, res){
		Hotel.find({owner : req.params.owner}).exec(function(err, hotels){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            }
			
			return res.send(hotels);			 
		});
	},
	
	addHotel: function(req, res){	  
		if(!req.body){
			return res.json({error: 'Invalid hotel ID'});
		}
				
		Hotel.create(req.body).exec(function(err, hotel){
            if (err){
				return res.json({error: 'Cannot create the Hotel'}, 500);
            }
			
			return res.send(hotel);			 
		})

	},
	
	updateHotel: function(req, res){
	    if(!req.body){
			return res.json({error: 'Invalid hotel ID'});
		}

		Hotel.update(req.body).exec(function(err, hotel){
			if (err){
				return res.json({error: 'Cannot update the Hotel'}, 500);
            }
			
			return res.send(hotel);	
		})
	},
	
	removeHotel: function(req, res){
		Hotel.destroy({id : req.params.id}).exec(function(err, hotel){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!hotel){
				return res.json({error: 'Invalid hotel ID'});
			}
			
			return res.send(hotel);			 
		});
	}
	
};

