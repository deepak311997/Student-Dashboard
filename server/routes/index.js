const DAGroutes = require('express')();

const dashboardRoutes = require('./Home/Home.js');

DAGroutes.use('/Home', dashboardRoutes);

module.exports = DAGroutes;
