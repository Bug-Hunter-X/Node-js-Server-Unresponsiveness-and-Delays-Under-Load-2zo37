const http = require('http');

const server = http.createServer(async (req, res) => {
  // Handle requests asynchronously
  try {
    if (req.url === '/') {
      // Simulate a delay, but asynchronously!
      await new Promise(resolve => setTimeout(resolve, 5000));
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});