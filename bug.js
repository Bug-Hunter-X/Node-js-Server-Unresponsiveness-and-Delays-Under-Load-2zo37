const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a delay to demonstrate the issue
  setTimeout(() => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }, 5000); // Simulate a 5-second delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});