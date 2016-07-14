var http = require('http');

function handler(request,response) {
    console.log('Request received');
    response.end("Hello World11!");

}

var server=http.createServer(handler);

server.listen(3000,function(){
    console.log("server started on port 3000");
});
