var http = require('http');
var request = require("request");
var url  = require('url');

http.createServer(function(req,res){
 var url_parts = url.parse(req.url, true);
 var query = url_parts.query;

 console.log(query.addr);

 request({
   uri: query.addr,
 }, function(error, response, body) {
   if(error){
     console.log(error);
   }
   else {
     res.writeHead(200);
     res.write(body);
     res.end();
     console.log(body);
   }
 });

}).listen(8080);
