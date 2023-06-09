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
    res.json(student)
   
   
  })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })