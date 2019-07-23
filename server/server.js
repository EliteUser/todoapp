const http = require('http');
const url = require('url');

const server = new http.Server((request, response) => {
  const urlParsed = url.parse(request.url, true);
  let body = '';

  const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Method': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Accept, Content-Type, Access-Control-Allow-Headers'
  };

  if (request.method === 'OPTIONS') {
    response.writeHead(200, headers);
    response.end();
  }

  if (request.method === 'POST') {
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      console.log('Body: ' + body);
      response.writeHead(200, headers);
      response.end(JSON.stringify(body));
    });
  } else if (request.method === 'GET') {
    console.log('GET');
    if (urlParsed.pathname === '/test' && urlParsed.query.message) {
      response.setHeader('Cache-control', 'no-cache,no-store,must-revalidate');
      response.end(urlParsed.query.message);
    } else {
      response.statusCode = 404;
      response.end('No data found');
    }
  }
});

server.listen(8888, '127.0.0.1', () => {
  console.log('listening');
});
