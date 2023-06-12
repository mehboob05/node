const express = require('express')
// initilize express module
const app = express()
const port = 3004;

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })