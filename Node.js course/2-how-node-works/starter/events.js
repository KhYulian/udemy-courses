const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
	console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
	console.log('Customer name: Yulian');
});

myEmitter.on('newSale', stock => {
	console.log(`There are ${stock} items left in stock`);
});

myEmitter.emit('newSale', 9);

///////////////////////////////////////////////

// Create a server
const server = http.createServer();

server.on('request', (req, res) => {
	console.log('server recieved a new request');
	res.end('server recieved a new request');
});
server.on('request', (req, res) => {
	console.log('Another request');
});

server.on('close', () => {
	console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => console.log('Waiting for requests'));
