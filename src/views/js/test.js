function callRemoteServer(method, address, callback){
  superagent(method, address).end(callback);
}

describe('superagent', function() {
  it('should perform crossdomain GET', function(done) {
    callRemoteServer("GET", remoteServer, function(err, success) {
      if(err) { return done(err); }
      done()
    })
  });
  it('should perform crossdomain POST', function(done) {
    callRemoteServer("POST", remoteServer, function(err, success) {
      if(err) { return done(err); }
      done()
    })
  });
});