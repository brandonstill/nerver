// keys.js - return some creds bra
if (process.env.NODE_ENV === 'production') {
  // we in prod bra
  module.exports = require('./prod');
} else {
  // we in dev yo
  module.exports = require('./dev');
}