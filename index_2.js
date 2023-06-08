//Create server and send request and recevied response

const { json } = require("body-parser");
const http = require("http");

const server = http.createServer((request,response)=>{
    //content type
    response.setHeader("content-type","application/json");
    //json date send as object and received in string
    const obj ={
        name:"mehboob",
        class:"MCS",
        City:"Lodhran"
    }
    const objstr =json.stringify(obj);
    
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
    // response.writeHead(404,"this page is not found")
    response.end();
});


// http://localhost:3004

server.listen(3004,()=>{
console.log("server is running.....");
})