// core Node.js packages
const http = require('http'); // launch a server, send requests;

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(4242);