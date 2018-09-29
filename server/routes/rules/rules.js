const path = require('path');

const rulesRoutes = require('express')();

rulesRoutes.get('/', (req, res) => {
  res.sendFile(path.resolve('output/rules-config.json'));
});

module.exports = rulesRoutes;
