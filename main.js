console.log("testtting node js");
var http=require("http");
function handler(request,response) {
    response.writeHead(200,{'Content-type':'text/html'});
    response.end('<html>First Name: <input type="text" placeholder="Enter first name!" name="fname" value=""></html>');
    response.end('testing node js\n');
}
var server=http.createServer(handler);
server.listen(8081);
console.log('Server running at http://127.0.0.1:3030/');
