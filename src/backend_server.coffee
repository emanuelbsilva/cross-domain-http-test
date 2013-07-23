config = require('./configure')
express = require('express')

app = express()

app.get '/', (req, res) ->
  res.send('REQUESTED GET');

app.post '/', (req, res) ->
  res.send('REQUESTED POST');

app.listen(config.backend_server.port)