/**
* Businnes.js
*
* @description :: An User included on shuffle-a-hotel platform.
*/

module.exports = {
    schema: true,
	attributes: {
		name: {
			type: 'string',
			notEmpty: true,
			required: true
		},
		url:{
			type: 'string',
			required: true,
			url: true
		},
		user: {
			model: 'user',
			required: true
		},
        hotels:{
            collection: 'hotel',
            via: 'owner'
        }
	},
  
	beforeCreate: function (values, cb) {

		// Encrypt password
		// bcrypt.compare(req.param('password'), user.password, function(err, match)...
		// var bcrypt = require('bcrypt-nodejs');
		// bcrypt.hash(values.password, 10, function(err, hash) {
		// 	if(err) return cb(err);
		// 	values.password = hash;

		// 	cb();
		// });
		cb();
	}
}