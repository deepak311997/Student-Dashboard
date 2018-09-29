const overviewRoutes = require('express')();

overviewRoutes.get('/', (req, res) => {
  res.send('Summary View');
});

module.exports = overviewRoutes;
