const http = require('http');

// Create node server
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);
