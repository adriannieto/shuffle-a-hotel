/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {


  Hotel.create([{name:'Playa de la Luz', description: 'Awesome hotel', url:'awesomehotel.com', price: 120},
				{name:'Malaga Palacio', description: 'Awesome hotel', url:'awesomehotel.com', price: 120},
				{name:'NH Málaga', description: 'Awesome hotel', url:'awesomehotel.com', price: 120},
				{name:'Hotel Palma Palmilla', description: 'Awesome hotel', url:'awesomehotel.com', price: 120},
				{name:'Asperones Resort', description: 'Awesome hotel', url:'awesomehotel.com', price: 120},
				{name:'4 de Diciembre Gran Lujo', description: 'Awesome hotel', url:'awesomehotel.com', price: 120},
				{name:'AC Hoteles La Corta', description: 'Awesome hotel', url:'awesomehotel.com', price: 120},
				{name:'El Banco de la Esquina', description: 'Awesome hotel', url:'awesomehotel.com', price: 120}]
			).exec(function (err, hotel){
				if(err)
					console.log(err);
				
				console.log('Added a sample collection of hotels')
  			});
  
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
