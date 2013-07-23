function callRemoteServer(method, address){
	superagent(method, address)
		.end(function(res){
			document.write(JSON.stringify(res.body));
		});
}