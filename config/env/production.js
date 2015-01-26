module.exports = {
  models: {
       connection: 'productionOpenShiftMongoDB',
	   migrate: 'alter'
  },
  port: process.env.OPENSHIFT_NODEJS_PORT || 80,
  log: {
     level: "warn"
  }
};
