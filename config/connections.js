module.exports.connections = {
 developmentLocalStorage: {
    adapter: 'sails-disk'
  },

 productionOpenShiftMongoDB: {
    adapter: 'sails-mongo',
    host: process.env.OPENSHIFT_NODEJS_IP,   
    port: process.env.OPENSHIFT_NODEJS_PORT,
    user: process.env.OPENSHIFT_MONGODB_DB_HOST,
    password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
    database: process.env.OPENSHIFT_APP_NAME
  },

};
