EXPRESS JS NOTES

- install by yarn
`yarn add express`

- require it
`const express = require('express')`

- create the app
`const app = express()`

- listen with `app.listen(8080)` port number

- receive
```javascript
app.get('/', (request, response) => {
  response.send('Hello world')
})
```
