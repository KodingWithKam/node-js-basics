const http = require('http');

// Create node server
const server = http.createServer((req, res) => {
    // read request data
    // console.log(req.url, req.method, req.headers);

    const url = req.url;

    if (url === '/') {
        res.write(`
            <html lang="en">
                <head><title>Enter Message</title></head>
                <body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>
            </html>
        `);
        return res.end();
    }

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
