const express = require('express')
// initilize express module
const app = express()
const port = 3004;

// middleware used ==> What Is Middleware? A request handler with access to the application's request-response cycle is known as middleware.
// It's a function that holds the request object, the response object, and the middleware function. 
// Middleware can also send the response to the server before the request.
app.use(express.json());

app.get('/', (req, res) => {
    const student = {
        name: "Mehboob",
        Class: "MCS",
        City: "Lodhran",
        Gender: "Male"
    }
    res.json(student); 

  })
 
   //http://localhost:3004/search-fruit?id=2   data send using query

   app.get("/search-fruits",(req,res)=>{
    console.log(req.query.id);

    const fruits =["apple","mango","orange","cherry","banana"];
    const results = fruits[req.query.id]; 

    res.json({
      status:"ok",
      results:results
    });
   })

//http://localhost:3004/search/2    data send to sever using params
app.get("/search/:id",(req,res)=>{
  console.log(req.params.id);
  const name=["mehboob","ali","raza","asif"];
  const result = name[req.params.id];
  res.json({
status:"ok",
 result:result

  });
})

// how to get request body data in express js? data send  to server through request body 
let student = [];
app.post("/create-user",(req,res)=>{
  console.log(req.body);
  // push data in array through request body  
  student.push(req.body);

  res.json(
    
    student
  );
 
  //delete data from server
  app.delete("/delete-user/:id",(req,res)=>{
    // console.log(req.params.id);
    const id = req.params.id;
    student.splice(id,1);
    res.json({
      status:"ok",
      student:student
    }
       
    )
  })
 
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })