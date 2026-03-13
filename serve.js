const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const HOST = '127.0.0.1';

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);

  // quick health check
  if (req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('pong');
    return;
  }

  // handle favicon requests quickly to avoid ENOENT logs
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }
  
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  
  if (!path.extname(filePath) || req.url === '/') {
    filePath = path.join(__dirname, 'public', 'index.html');
  }

  console.log(`Serving: ${filePath}`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(`Error: ${err.message}`);
      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err2, data2) => {
        if (err2) {
          res.writeHead(500);
          res.end('Error loading content');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data2);
      });
      return;
    }

    const ext = path.extname(filePath);
    const contentTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml'
    };

    const contentType = contentTypes[ext] || 'text/plain';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});
