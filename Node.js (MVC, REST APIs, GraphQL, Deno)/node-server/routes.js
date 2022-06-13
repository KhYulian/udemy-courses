const fs = require('fs');

const requestHandler = (req, res) => {
  const {url, method} = req;

  if (url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><form action="/message" method="POST"><input name="message" type="text"/><button type="submit">Submit</button></form></body>`);
    res.write('</html>');
    res.end(); // send response back to the client. Response shouldn't be changed after res.end
    return;
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      // event will be fired whenever new chunk is ready;
      // console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      // done parsing incoming request
      const parsedBody = Buffer.concat(body).toString(); // will create new buffer
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        // res.statusCode(302);
        // res.setHeader('Location', '/')
        res.writeHead(302, {'Location': '/'});
        res.end();
      });
    });
    return;
  }

// We can use npm package to set type headers
  res.setHeader('Content-Type', 'text/html'); // saying that type of the response will be res/html
  res.write('<html lang="en">');
  res.write('<head><title>My first response</title></head>');
  res.write(`<body><h1>Hello</h1></body>`);
  res.write('</html>');
  res.end(); // send response back to the client. Response shouldn't be changed after res.end
  return;
// process.exit()
};

// module.exports = {
//   handler: requestHandler,
//   text: 'DUMMY TEXT'
// }
// exports.handler = requestHandler

module.exports = requestHandler;

