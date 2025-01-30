var http = require('http');
var currentdate = require('./mymodule');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    res.write("The date and time are currently: " + currentdate.myDateTime());
    
   }).listen(8080);