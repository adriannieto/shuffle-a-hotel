/**
 * BusinessController
 *
 * @description :: Server-side logic for managing Business
 */

module.exports = {
	
	getBusiness: function(req, res){
		Business.findOne({id : req.params.id}).populateAll().exec(function(err, business){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!business){
				return res.json({error: 'Invalid Business ID'});
			}
			
			return res.send(business);			 
		});
	},
	
	addBusiness: function(req, res){	  
		if(!req.body){
			return res.json({error: 'Invalid Business ID'});
		}
				
		Business.create(req.body).exec(function(err, business){
            if (err){
				return res.json({error: 'Cannot create the Business'}, 500);
            }
			
			return res.send(business);			 
		})

	},
	
	updateBusiness: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	removeBusiness: function(req, res){
		Business.destroy({id : req.params.id}).exec(function(err, business){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!hotel){
				return res.json({error: 'Invalid hotel ID'});
			}
			
			return res.send(business);			 
		});
	}
	
};

