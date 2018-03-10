const http = require('http');
const express = require('express');

const site = express.static(__dirname);

const app = express();
app.use('/', (req, res, next) => {
  if (req.path === '/exokit') {
    res.type('text/html');
  }

  site(req, res, next);
});

http.createServer(app)
  .listen(8080);
