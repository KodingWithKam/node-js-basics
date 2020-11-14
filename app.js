const http = require('http');

// Create node server
const server = http.createServer((req, res) => {
    // read request data
    console.log(req.url, req.method, req.headers);

    // Send response (set header)
    res.setHeader('Content-Type', 'text/html');
    // Set response to be simple html page
    res.write(`
        <html lang="en">
        <head><title>My First Node App</title></head>
        <body><h1>Hello from my Node server!</h1></body>
        </html>
    `);
    res.end();
});

server.listen(3000);
