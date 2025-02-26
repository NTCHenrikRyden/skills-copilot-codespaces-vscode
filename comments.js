// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// Create an HTTP server using the http module.
// Create a server that listens on port 3000.
// When a client makes a request, respond with the comments.html file.
// Use the fs module to read the comments.html file.
// When the server is running, it should log the message "Server listening on port 3000".

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/comments.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});