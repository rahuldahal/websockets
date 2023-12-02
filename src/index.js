import http from 'http';

// Create a local server
const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end();
});

server.listen(8000, () => console.log('listening on port 8000'));
