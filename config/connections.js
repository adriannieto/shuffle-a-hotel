module.exports.connections = {
 developmentLocalStorage: {
    adapter: 'sails-disk'
  },

 productionOpenShiftMongoDB: {
    adapter: 'sails-mongo',
    host: '127.0.0.1',   
    port: 27017,
    database: 'shuffle-a-hotel'
  },

};
