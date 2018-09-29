const path = require('path');

const fileRoutes = require('express')();

fileRoutes.get('/', (req, res) => {
  res.sendFile(path.resolve('output/config.json'));
});

fileRoutes.get('/getFileViolations', (req, res) => {
  res.sendFile(path.resolve(`output/${req.query.fileHref}`));
});

function getFilePath(filepath) {
  const position = filepath.search('Monster_Events_JSP');

  return filepath.substring(position);
}

fileRoutes.get('/getSourceCode', (req, res) => {
  const filePath = getFilePath(req.query.filePath);

  res.sendFile(path.resolve(`output/${filePath}`));
});

module.exports = fileRoutes;

