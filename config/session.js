module.exports.session = {
  secret: '7765abbecdaf9c754d6bab4900dc6740',

  cookie: {
     maxAge: 24 * 60 * 60 * 1000
  },

  adapter: 'mongo',
  host: '127.0.0.1',   
  port: 27017,
  db: 'shuffle-a-hotel',
  collection: 'sessions'
};
