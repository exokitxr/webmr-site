const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

http.createServer(app)
  .listen(8080);
