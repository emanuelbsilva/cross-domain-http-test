config = require('./configure')
express = require('express')

app = express()
app.use(require('express-ie-cors')());
app.use(express.bodyParser());

allowCrossDomain = (req, res, next) ->
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Accept, Content-Type");
	next()

app.use(allowCrossDomain)

app.get '/', (req, res) ->
  res.send('Test passed for GET request.');

app.get '/testjson', (req, res) ->
  res.send( { testresult: 'Test passed for GET request.' });

app.post '/', (req, res) ->
  res.send('Test passed for POST request.');

app.post '/testjson', (req, res) ->
  res.send( { testresult: 'Test passed for POST request.' });

app.post '/testjsonwithdata', (req, res) ->
  res.send( { echo: req.body });

app.options '/', (req, res) ->
  res.send('REQUESTED OPTIONS');
app.options '/testjson', (req, res) ->
  res.send('REQUESTED OPTIONS');
app.options '/testjsonwithdata', (req, res) ->
  res.send('REQUESTED OPTIONS');

app.listen(config.backend_server.port)