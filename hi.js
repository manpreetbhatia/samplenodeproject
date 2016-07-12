var http = require('http');

function handler(request,response) {
    console.log('Requet received');
    response.end("Hello World!");

}

var server=http.createServer(handler);

server.listen(3000,function(){
    console.log("server started on port 3000");
});