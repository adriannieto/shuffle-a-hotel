/**
* HotelsController
*
* @description :: Server-side logic for managing users
*/

module.exports = {
	
	getUser: function(req, res){
		User.findOne({id : req.params.id}).populateAll().exec(function(err, user){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!user){
				return	res.json({error: 'Invalid user ID'});
			}
			
			return res.send(user);			 
		});
	},
	
	addUser: function(req, res){
		if(!req.body){
			return res.json({error: 'Invalid User'});
		}
				
		User.create(req.body).exec(function(err, user){
            if (err){
				return res.json({error: 'Cannot create the User'}, 500);
            }
			
			return res.send(user);			 
		})
	},
	
	updateUser: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	removeUser: function(req, res){
		User.destroy({id : req.params.id}).populateAll().exec(function(err, user){
            if (err){
				return res.json({error: 'Unexpected error'}, 500);
            } 
			
			if (!hotel){
				return res.json({error: 'Invalid user ID'});
			}
			
			return res.send(user);			 
		});
	},
	
	
	
	login: function(req, res) {
		var bcrypt = require('bcrypt-nodejs');
		//var crypto = require('crypto');

		User.findOneByUsername(req.body.username).exec(function(err, user) {
			if (err)
				return res.json({error: 'Unexpected error'}, 500);

			if (user) {
				bcrypt.compare(req.body.password, user.password, function(err, match) {
					if (err)
						return res.json({error: 'Unexpected error'}, 500);

					if (match) {
						// password match
						// Not sure if id must be hashed.
						//var hash = crypto.createHash('md5')
						//	.update(user.id + Date.now()).digest('hex');
						//user.hash = hash;
						req.session.user = user.id;
						delete user.password;
						return res.json(user);
					} else {
						// invalid password
						req.session.user = null;
						return res.json({error: 'Invalid username/password'}, 400);
					}
				});
			} else {
				return res.json({error: 'Invalid username/password'}, 400);
			}
		});
	},

	logout: function(req, res) {
		req.session.user = null;
		return res.json({ sucess : 'User successfuly logged out'}, 200);
	}
	
};

