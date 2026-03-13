const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Serve static files or index.html
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  
  // Default to index.html for SPA routing
  if (!path.extname(filePath) || req.url === '/') {
    filePath = path.join(__dirname, 'public', 'index.html');
  }

  console.log(`Reading file: ${filePath}`);

  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
      console.log(`Error reading ${filePath}: ${err.code}`);
      if (err.code === 'ENOENT') {
        // Serve index.html for any not found routes (SPA)
        console.log('File not found, serving index.html instead');
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8', (err, content) => {
          if (err) {
            console.error('Error reading index.html:', err);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('Error reading index.html');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        });
      } else {
        console.error('Read error:', err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Server Error: ' + err.message);
      }
    } else {
      const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
      }[path.extname(filePath)] || 'text/plain';

      console.log(`Sending ${filePath} as ${contentType}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend server running on http://localhost:${PORT}`);
  console.log(`__dirname: ${__dirname}`);
});

server.on('clientError', (err, socket) => {
  console.error('Client error:', err);
});
