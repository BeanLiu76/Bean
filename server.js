var http = require("http");
var url = require("url");


  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("request for" + pathname +"received.");
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888,"0.0.0.0");
  console.log("server started");
