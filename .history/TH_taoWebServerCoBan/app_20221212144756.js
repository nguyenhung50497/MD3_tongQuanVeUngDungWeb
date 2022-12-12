const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1> Hello world </h1><hr>');
    res.end();
});

server.listen(port8088