import http from 'http';
import { server as WebSocketServer } from 'websocket';

let connection = null;

// Create a local server
const server = http.createServer((_, res) => {
  console.log('received http request');

  res.writeHead(200);
  res.end();
});

// Create a websocket server
const websocket = new WebSocketServer({
  httpServer: server,
});

websocket.on('request', (request) => {
  connection = request.accept('rd-protocol', request.origin); // or null to accept any protocol

  // Events
  connection.on('open', () => console.log('Websocket connection opened'));
  connection.on('message', (message) =>
    console.log(`Message: ${message.utf8Data}`)
  );
  connection.on('close', () => console.log('Websocket connection closed'));
});

server.listen(8000, () => console.log('listening on port 8000'));
