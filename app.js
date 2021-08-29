const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.get('/', (req, res) => {
  res.send('project init')
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
