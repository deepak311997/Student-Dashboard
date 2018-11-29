const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const routes = require('./routes');
const { port } = require('./settings/serverConfig');

app.use(cors());

//

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../Student-Dashboard/client')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../Student-Dashboard/client/index.html`));
});
app.post('*', (request, response) => {
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});

app.listen(port, () => console.log(`App listening on port... ${port}`));
