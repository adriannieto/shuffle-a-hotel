/**
* HotelsController
*
* @description :: Server-side logic for managing users
*/

module.exports = {
	
	getUser: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	addUser: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	updateUser: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},
	
	removeUser: function(req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
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

