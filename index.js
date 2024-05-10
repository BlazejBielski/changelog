const http = require('http');

const server = http.createServer(async (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({"message": "Hello World"}));
        return res.end();
        return;
    }

});

server.listen(3002, () => {
    console.log("Server started on port 3002");
});

