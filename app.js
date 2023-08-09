const express = require('express')
const test = require('./test/test')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(test)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})