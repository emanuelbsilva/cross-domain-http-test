config = require('./configure')
express = require('express')

app = express()

allowCrossDomain = (req, res, next) ->
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Accept, Content-Type");
	next()

app.use(allowCrossDomain)

app.get '/', (req, res) ->
  res.send('REQUESTED GET');

app.post '/', (req, res) ->
  res.send('REQUESTED POST');

app.options '/', (req, res) ->
  res.send('REQUESTED OPTIONS');

app.listen(config.backend_server.port)