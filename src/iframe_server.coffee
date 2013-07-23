config = require('./configure')
express = require('express')
app = express()

app.get '/', (req, res) ->
  res.send('hello world');

app.listen(config.iframe_server.port)