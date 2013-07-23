function callRemoteServer(address){
	superagent
		.get(address)
		.end(function(res){
			document.write(JSON.stringify(res.body));
		});
}