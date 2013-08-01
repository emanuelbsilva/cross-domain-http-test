config = require('./configure')
express = require('express')

app = express()
app.use('/vendor', express.static(__dirname + '/views/vendor'));
app.use('/js', express.static(__dirname + '/views/js'));
app.engine('html', require('ejs').renderFile);

app.configure ->
  app.set('views', "#{__dirname}/views")

app.get '/', (req, res) ->
  res.render('script.html', { backend_server_port: "//#{config.backend_server.domain}:#{config.backend_server.port}"})

app.listen(config.script_server.port)