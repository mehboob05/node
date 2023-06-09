const express = require('express')
const fs =require('fs');
// initilize express module
const app = express()
const port = 3004;

app.get('/', (req, res) => {
  const htmlhome =fs.readFileSync("./pages/index.html","utf-8")
  res.send(htmlhome);
})
app.get('/about', (req, res) => {
  const htmlcontent = fs.readFileSync("./pages/about.html","utf-8")
  res.send(htmlcontent)
})
app.get('/contact', (req, res) => {
  const htmlcontact = fs.readFileSync("./pages/contact.html","utf-8")
  res.send(htmlcontact);
})
app.get('/gallary', (req, res) => {
  const htmlgallary =fs.readFileSync("./pages/gallary.html","utf-8")
  res.send(htmlgallary)
})

app.use((req, res) => {
  res.status(404).send("Page not found...!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})