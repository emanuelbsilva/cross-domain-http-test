config = require('./configure')
express = require('express')

app = express()
app.engine('html', require('ejs').renderFile);

app.get '/', (req, res) ->
  res.render('iframe.html', { script_server_port: "//localhost:#{config.script_server.port}"})

app.listen(config.iframe_server.port)