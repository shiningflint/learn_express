const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h2>Hello world!</h2><p><a href="/json">Go to JSON example</a></p>')
})

app.get('/json', (req, res) => {
  res.send({
    text: 'returning JSON here',
    bananas: 2,
    person: {
      first_name: 'Bambang',
      last_name: 'Santoso'
    }
  })
})

app.listen(8080)
