const DAGroutes = require('express')();

const dashboardRoutes = require('./Dashboard/Dashboard.js');
const uploadRoutes = require('./Upload/Upload');

DAGroutes.use('/dashboard', dashboardRoutes);
DAGroutes.use('/upload', uploadRoutes);

module.exports = DAGroutes;
