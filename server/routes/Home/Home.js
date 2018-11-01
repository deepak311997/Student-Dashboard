const path = require('path');

const dashboardRoutes = require('express')();

dashboardRoutes.get('/', (req, res) => {
  res.sendFile(path.resolve('output/7SEM_CS1.json'));
});

module.exports = dashboardRoutes;
