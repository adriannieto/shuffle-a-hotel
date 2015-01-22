/**
* HotelsController
*
* @description :: Server-side logic for managing users
*/

module.exports = {
	
	getUser: function(req, res){
		User.findOne({id : req.params.id}).populateAll().exec(function(err, user){
            if (err){
				res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!hotel){
				res.json({error: 'Invalid user ID'});
			}
			
			return res.send(user);			 
		});
	},
	
	addUser: function(req, res){
		if(!req.body.user){
			res.json({error: 'Invalid User'});
		}
				
		User.create(req.body.user).exec(function(err, user){
            if (err){
				res.json({error: 'Cannot create the User'}, 500);
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
				res.json({error: 'Unexpected error'}, 500);
            }
			
			if (!hotel){
				res.json({error: 'Invalid user ID'});
			}
			
			return res.send(user);			 
		});
	},
	
	
	
	login: function(req, res) {
		var bcrypt = require('bcrypt');
		//var crypto = require('crypto');

		User.findOneByUsername(req.parm('username')).done(function(err, user) {
			if (err)
				res.json({error: 'Unexpected error'}, 500);

			if (user) {
				bcrypt.compare(req.parm('password'), user.password, function(err, match) {
					if (err)
						res.json({error: 'Unexpected error'}, 500);

					if (match) {
						// password match
						// Not sure if id must be hashed.
						//var hash = crypto.createHash('md5')
						//	.update(user.id + Date.now()).digest('hex');
						//user.hash = hash;
						req.session.user = user.id
						delete user.password;
						res.json(user);
					} else {
						// invalid password
						req.session.user = null;
						res.json({error: 'Invalid username/password'}, 400);
					}
				});
			} else {
				res.json({error: 'Invalid username/password'}, 400);
			}
		});
	},

	logout: function(req, res) {
		req.session.user = null;
		res.json({ sucess : 'User successfuly logged out'}, 500);
	}
	
};

