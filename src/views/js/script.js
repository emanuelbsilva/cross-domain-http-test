function callRemoteServer(method, address){
	superagent(method, address)
		.end(function(res){
			document.write("<p>" + res.text + "</p>");
		});
}