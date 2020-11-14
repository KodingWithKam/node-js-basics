const http = require('http');

// Create node server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

server.listen(3000);
