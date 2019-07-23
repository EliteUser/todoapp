const http = require('http');
const url = require('url');

const server = new http.Server((request, response) => {
  const urlParsed = url.parse(request.url, true);
  let body = '';

  if (request.method === 'POST') {
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      console.log('Body: ' + body);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(`Body: ${JSON.stringify(body)}`);
    });
  } else {
    if (urlParsed.pathname === '/entity') {
      response.setHeader('Cache-control', 'no-cache,no-store,must-revalidate');
      response.end(urlParsed.query.message);
    } else {
      response.statusCode = 404;
      response.end(`Body: ${JSON.stringify(body)}`);
    }
  }
});

server.listen(8888, '127.0.0.1');
