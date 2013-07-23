config = require('./configure')
express = require('express')
app = express()

app.get '/', (req, res) ->
  res.send('script server');

app.listen(config.script_server.port)