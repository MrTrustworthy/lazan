const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');


  setInterval(() => ws.send("Test"), 1000)
});

console.log("Loaded WS")