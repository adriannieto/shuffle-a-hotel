module.exports.session = {
  secret: '7765abbecdaf9c754d6bab4900dc6740',

  cookie: {
     maxAge: 24 * 60 * 60 * 1000
  },

  adapter: 'mongo',
  adapter: 'sails-mongo',
  host: process.env.OPENSHIFT_NODEJS_IP,   
  port: process.env.OPENSHIFT_NODEJS_PORT,
  user: process.env.OPENSHIFT_MONGODB_DB_HOST,
  password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
  database: process.env.OPENSHIFT_APP_NAME,
  collection: 'sessions'
};
