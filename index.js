const express = require('express')
const app = express()
 
app.get('/project1', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)