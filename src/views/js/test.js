function callRemoteServer(method, address, data, callback){
  var req = superagent(method, address);
  if(data) { req = req.send(data); }
  req.end(callback);
}

function assertEquals(response, expected) {
  if(!(response ===expected)) {
    throw new Error('Expected "' + response + '" to equal "' + expected + '"');
  }
}

describe('superagent', function() {

  it('should perform crossdomain GET', function(done) {
    callRemoteServer("GET", remoteServer, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.text, "Test passed for GET request.");
      done()
    })
  });
  it('should perform crossdomain POST', function(done) {
    callRemoteServer("POST", remoteServer, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.text, "Test passed for POST request.");
      done()
    })
  });
  it('should perform crossdomain GET which returns JSON data', function(done) {
    callRemoteServer("GET", jsonEndpoint, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.body.testresult, "Test passed for GET request.");
      done()
    })
  });
  it('should perform crossdomain POST which returns JSON data', function(done) {
    callRemoteServer("POST", jsonEndpoint, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.body.testresult, "Test passed for POST request.");
      done()
    })
  });
  it('should perform crossdomain POST which receives and returns JSON data', function(done) {
    callRemoteServer("POST", jsonWithDataEndpoint, { somekey: 'test passed!' }, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.body.echo.somekey, "test passed!");
      done()
    })
  });
});

describe('XDomainRequest (IE 8-9)', function() {
  it('should perform crossdomain GET', function(done) {
    ajaxXDomainRequest("GET", remoteServer, false, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success, "Test passed for GET request.");
      done()
    })
  });
  it('should perform crossdomain POST', function(done) {
    ajaxXDomainRequest("POST", remoteServer, false, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success, "Test passed for POST request.");
      done()
    })
  });
  it('should perform crossdomain GET which returns JSON data', function(done) {
    ajaxXDomainRequest("GET", jsonEndpoint, true, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.testresult, "Test passed for GET request.");
      done()
    })
  });
  it('should perform crossdomain POST which returns JSON data', function(done) {
    ajaxXDomainRequest("POST", jsonEndpoint, true, null, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.testresult, "Test passed for POST request.");
      done()
    })
  });

  it('should perform crossdomain POST which receives and returns JSON data', function(done) {
    ajaxXDomainRequest("POST", jsonWithDataEndpoint, true, { somekey: 'test passed!' }, function(err, success) {
      if(err) { return done(err); }
      assertEquals(success.echo.somekey, "test passed!");
      done()
    })
  });

})