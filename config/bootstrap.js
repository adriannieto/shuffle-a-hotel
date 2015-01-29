module.exports.bootstrap = function(cb) {

	var user = {name:"paco", lastName: "rodríguez", country: "Albania", age: "16", email: "email@host.com",
	 username: "paco", password: "password"};


		User.create(user).exec(function(err, user){
            if (err){
            	cb(err);
            }
		});

		cb();
};