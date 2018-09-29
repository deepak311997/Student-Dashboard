const AIProutes = require('express')();

const filesRoutes = require('./files/files.js');
const rulesRoutes = require('./rules/rules.js');
const overviewRoutes = require('./overview/overview.js');

AIProutes.use('/files', filesRoutes);
AIProutes.use('/rules', rulesRoutes);
AIProutes.use('/overview', overviewRoutes);

module.exports = AIProutes;

