const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write(`
            <html lang="en">
                <head><title>Enter Message</title></head>
                <body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>
            </html>
        `);
        return res.end();
    }

    if (url === '/message' && method === 'post') {
        // A buffer is a construct that allows you to hold multiple chunks and work with them
        const body = [];
        // listen to data event
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            // create new buffer and add chunks to it
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // Create file message.txt and write 'Dummy' to it
            fs.writeFile('message.txt', message, err => {
                // set status code for successful redirect
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
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
};

module.exports = requestHandler;
