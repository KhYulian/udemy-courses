const http = require('http');

const server = http.createServer((req, res) => {
  const {url} = req;

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html lang="en">');
    res.write('<head><title>Home Page</title></head>');
    res.write(`
    <body>
      <h1>Hello! This is my first Node.js assignment :)</h1>
      <a href="/users">Go to users =></a><br/>
      <form method="POST" action="/create-user">
        <label for="username">User Name:</label>
        <input type="text" name="username" id="username"/>
        <button type="submit">Submit</button>
      </form>
    </body>`);
    res.write('</html>');

    return res.end();
  }
  if (url === '/users') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html lang="en">');
    res.write('<head><title>Users</title></head>');
    res.write(`
    <body>
    <a href="/">Go Home</a>
      <ul>
        <li>
          User 1
        </li>
        <li>
          User 2
        </li>
        <li>
          User 3
        </li>
      </ul>
    </body>`);
    res.write('</html>');

    return res.end();
  }
  if (url === '/create-user') {
    const body = [];
    res.writeHead(302, {'Location': '/'});
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      // console.log(username);
      return res.end();
    });
  }
});

server.listen(3000);

