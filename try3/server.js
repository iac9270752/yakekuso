const http = require('http');
const fs = require('fs');
const url = require('url');

const indexPage = fs.readFileSync('./index.html', 'UTF-8');
const styleCss = fs.readFileSync('./style.css', 'UTF-8');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer(RouteSetting);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function RouteSetting(req, res) {
  const url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(indexPage);
      res.end();
      break;
  
    case '/css/style.css':
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(styleCss);
    res.end();
    break;

    default:
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('お探しのページは見つかりません。');
      break;
  }
}
