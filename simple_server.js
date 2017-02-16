var http = require('http');
function request(req, res){
  console.log("get request");
  console.log("Incoming request: " + req.method +" " + req.url);
  res.writeHead(200,{"Content-Type" : "application/json"});
  res.end(JSON.stringify({error: null}) + "/n");
}
var s = http.createServer(request);
s.listen(8888,"0.0.0.0");
console.log("server started.");
