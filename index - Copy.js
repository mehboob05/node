const express =require("express");
const app = express();
const port =3004;

//middleware used
app.use(express.json());

// data send  to server using request body    use post and json in insomnia
// add data url  http://localhost:3004/create-blog
let blogpost =[];
app.post("/create-blog",(req,res)=>{
    console.log(req.body);
    // push data through request body
    blogpost.push(req.body);

    res.json({
        status:"true",
        blogpost:blogpost
    })
})

//delete data from server   use delete and body in insomnia
// url data delete  http://localhost:3004/delete-blog/1
app.delete("/delete-blog/:bid",(req,res)=>{
    const bid = req.params.bid;
    blogpost.splice(bid,1);
    res.json({
        status:"true",
        blogpost:blogpost
    })
})

// update data server     use put and json in insomnia
//http://localhost:3004/update-blog/1
app.put("/update-blog/:bid",(req,res)=>{
    const bid = req.params.bid;

    let targetBlog = blogpost[bid];

    if(targetBlog){
        blogpost[bid] =req.body;
        res.json({
            status:"true",
            blogpost:blogpost

        })
    } else {
        res.json({
            status:"false",
            massage:"Blog not Found"
        })
    }
})

//read data server   http://localhost:3004/read-blog/1   use get method and in body text in insomnia

app.get("/read-blog/:bid",(req,res)=>{
    const index = req.params.bid;
  
   res.json({
    status:"true",
    blogpost:blogpost[index]
   })
   
   

})

// search data from server  

app.get("/search-blog/:bid",(req,res)=>{
  const bid = req.params.bid;
  blogpost.find(bid);
  res.json({
    status:"true",
    blogpost:blogpost
  })
})








app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})  