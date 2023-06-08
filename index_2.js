//Create server and send request and recevied response

const http = require("http");

const server = http.createServer((request,response)=>{
    if(request.url == "/contact"){
        response.write("This is Contact Page")
    } else if(request.url == "/product"){
        response.write("This is Product Page")
    } else if(request.url == "/about"){
        response.write("This is About Page")
    }else if(request.url == "/"){
        response.write("<h1>This is Home Page...!</h1>")
    }else {
        response.write("404 the page is not found")
    }
   // status
    response.writeHead
    response.end();
});


// http://localhost:3004

server.listen(3004,()=>{
console.log("server is running.....");
})