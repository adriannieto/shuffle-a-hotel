/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

    // User is allowed, proceed to controller
    if (req.session.user) {
      req.body.userId = req.session.user;
      return next();
    }
    // User is not allowed
    else {
      return res.json({error : "Unauthorized"});
    }
};
