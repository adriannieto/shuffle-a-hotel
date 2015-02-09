module.exports.routes = {

  // Hotel related routes
  'GET /api/hotels/business/:owner': 'HotelController.getHotelsByBusiness',
  'GET /api/hotels:page?:limit?:stars?': 'HotelController.listHotels',
  'GET /api/hotels/:id': 'HotelController.getHotel',
  'PUT /api/hotels/:id': 'HotelController.updateHotel',
  'POST /api/hotels': 'HotelController.addHotel',
  'DELETE /api/hotels/:id': 'HotelController.removeHotel',


   // User related routes
  'GET /api/users/:id': 'UserController.getUser',
  'PUT /api/users': 'UserController.updateUser',
  'POST /api/users': 'UserController.addUser',
  'DELETE /api/users/:id': 'UserController.removeUser',
	
   // Business related routes
  'GET /api/business/:id': 'BusinessController.getBusiness',
  'PUT /api/business': 'BusinessController.updateBusiness',
  'POST /api/business': 'BusinessController.addBusiness',
  'DELETE /api/business/:id': 'BusinessController.removeBusiness',
  'GET /api/business/:user?': 'BusinessController.getBusinessByUser',
  
  
  // Authentication routes
  'POST /api/login': 'UserController.login',
  'GET /api/logout': 'UserController.logout'

};
