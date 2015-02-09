module.exports.bootstrap = function(cb) {

	 Hotel.create([{name:'Playa de la Luz', description: 'Awesome hotel', url:'awesomehotel.com', price: 120, rating: 1, location: {latitude: 36.723380, longitude: -4.414341}},
				{name:'Malaga Palacio', description: 'Awesome hotel', url:'awesomehotel.com', price: 120, rating: 2, location: {latitude: 41.407381, longitude: 2.165970}},
				{name:'NH Málaga', description: 'Awesome hotel', url:'awesomehotel.com', price: 120, rating: 2, location: {latitude: 43.274880, longitude: -7.985397}},
				{name:'Hotel Palma Palmilla', description: 'Awesome hotel', url:'awesomehotel.com', rating: 3, price: 120},
				{name:'Asperones Resort', description: 'Awesome hotel', url:'awesomehotel.com', rating: 3, price: 120},
				{name:'4 de Diciembre Gran Lujo', description: 'Awesome hotel', url:'awesomehotel.com', rating: 4, price: 120},
				{name:'AC Hoteles La Corta', description: 'Awesome hotel', url:'awesomehotel.com', rating: 5, price: 120},
				{name:'El Banco de la Esquina', description: 'Awesome hotel', url:'awesomehotel.com', rating: 5, price: 120}]
			).exec(function (err, hotel){
				if(err)
					console.log(err);
				
				console.log('Added a sample collection of hotels')
  			});

	var user = {name:"paco", lastName: "rodríguez", country: "Albania", age: "16", email: "email@host.com",
	 username: "paco", password: "password"};


		User.create(user).exec(function(err, user){
			console.log("created user: ");
			console.log(user);
            if (err){
            	cb(err);
            }
		});

		cb();
};