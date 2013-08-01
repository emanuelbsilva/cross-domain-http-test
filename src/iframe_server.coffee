config = require('./configure')
express = require('express')

app = express()
app.engine('html', require('ejs').renderFile)

app.configure ->
  app.set('views', "#{__dirname}/views")

app.get '/', (req, res) ->
  res.render('iframe.html', { script_server_port: "//#{config.script_server.domain}:#{config.script_server.port}"})

app.listen(config.iframe_server.port)

console.log "Got to http://#{config.iframe_server.domain}:#{config.iframe_server.port} to test."