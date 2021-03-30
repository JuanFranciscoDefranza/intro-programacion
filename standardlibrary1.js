var http = require('http');

function handler(request, response){
    response.end("Hola!");
}

var server = http.createServer(handler);

server.listen(8000);