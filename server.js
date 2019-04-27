const path = require('path');
const app = require('./utils/config').app;
const server = require('./utils/config').server;

require('dotenv').config();
const port = process.env.PORT || 3200;
const env = process.env.NODE_ENV || 'development';

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

server.listen(port, () => {
  console.log(`------------------ SERVER ON PORT ${port} IN ${env} MODE ------------------`);
});
