const express = require('express')
// initilize express module
const app = express()
const port = 3004;

app.get('/', (req, res) => {
   
    res.send("This is home page");
  })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })