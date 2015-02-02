module.exports = {
  models: {
       connection: 'productionOpenShiftMongoDB',
	   migrate: 'alter'
  },
  port: 1337,
  log: {
     level: "warn"
  }
};
