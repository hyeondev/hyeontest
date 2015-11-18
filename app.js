var http = require('http');
var request = require("request");

http.createServer(function(req,res){
 request({
   uri: "https://kr.api.pvp.net/api/lol/kr/v1.4/summoner/by-name/우끼키끼?api_key=ee43eef2-b533-4c93-b010-6f99d46c8ae9",
 }, function(error, response, body) {
   res.writeHead(200);
   res.write(body);
   res.end();
   console.log(body);
 });

}).listen(8080);
