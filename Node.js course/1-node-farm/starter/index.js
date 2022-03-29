const fs = require('fs');
const http = require('http');
const url = require('url');

const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');

//////////////////////////////////
// FILES

// // Read and write data to file

// // Read
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;

// // Write
// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log('File has been written.');

// // Synchronous code => is blocking

// // Nonblocking (asyncronous) way

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
// 	console.log(data1);
// 	console.log('file 1 have been read');

// 	if (err) return console.log(`An error occured: ${err}`);

// 	fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
// 		console.log(data2);
// 		console.log('file 2 have been read');

// 		fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
// 			console.log(data3);
// 			console.log('file 3 have been read');

// 			fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
// 				console.log(`Your file has been written`);
// 			});
// 		});
// 	});
// });
// console.log('start reading files');

/////////////////////////////////
// SERVER

const templateOverview = fs.readFileSync(
	`${__dirname}/templates/template-overview.html`,
	'utf-8'
);
const templateCard = fs.readFileSync(
	`${__dirname}/templates/template-card.html`,
	'utf-8'
);
const templateProduct = fs.readFileSync(
	`${__dirname}/templates/template-product.html`,
	'utf-8'
);
const productData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productDataObj = JSON.parse(productData);

const slugs = productDataObj.map(product =>
	slugify(product.productName, { lower: true })
);

const server = http.createServer((request, response) => {
	const { query, pathname } = url.parse(request.url, true);

	// HOME PAGE (OVERVIEW PAGE)
	if (pathname === '/' || pathname === '/overview') {
		response.writeHead(200, {
			'Content-type': 'text/html'
		});
		const cardsHtml = productDataObj
			.map(product => replaceTemplate(templateCard, product))
			.join('');
		const output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

		response.end(output);
	}
	// PRODUCT PAGE
	else if (pathname === '/product') {
		const product = productDataObj[query.id];
		const output = replaceTemplate(templateProduct, product);

		response.end(output);
		// API
	} else if (pathname === '/api') {
		// fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
		// 	response.writeHead(200, {
		// 		'Content-type': 'application/json'
		// 	});
		//     response.end(data)
		// });
		response.writeHead(200, {
			'Content-type': 'application/json'
		});
		response.end(productData);
		// NOT FOUND PAGE
	} else {
		response.writeHead(404, {
			'Content-type': 'text/html',
			'my-own-header': 'hello-world'
		});
		response.end(
			`<h1 style="text-align: center; color: red;">Error ${response.statusCode}</h1>
            <h1 style="text-align: center;">${request.url} does not exist.</h1>`
		);
	}
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Listening to requests on port 8000');
});

////////////////////////////////
// ROUTING
// Routing - implementing different actions for different url's
// In big projects we use EXPRESS for routing

////////////////////////////////////
// Building simple API
// API - service from which we can request some data.

// HTML templates

// Createing out o wn modules
