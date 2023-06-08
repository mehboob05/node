const express = require('express')
// initilize express module
const app = express()
const port = 3004

app.get('/', (req, res) => {
  res.send('<h2>This is  my home page</h2>')
})
app.get('/about', (req, res) => {
  res.send('<h1>This is about page heading 1</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})