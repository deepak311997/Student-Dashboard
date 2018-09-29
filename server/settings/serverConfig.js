const appConfig = require('../config.js').app;

module.exports = {
  port: appConfig.port || process.env.PORT || 8080,
};
