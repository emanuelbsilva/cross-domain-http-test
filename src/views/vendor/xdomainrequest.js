function ajaxXDomainRequest(method, address, isJSON, data, callback) {
    xdr = new XDomainRequest();
    xdr.onload = function() {
      callback( null,
        isJSON? JSON.parse(xdr.responseText) : xdr.responseText );
    };
    xdr.onerror = function() {
      callback( new Error(), null );
    };
    xdr.onprogress = function(){};
    xdr.ontimeout = function() {
      callback( new Error('timeout'), null );
    };
    xdr.timeout = 60;
    xdr.open(method, address );

    if(data) {
      xdr.send(isJSON ? JSON.stringify(data) : data);
    }
    else {
      xdr.send();
    }
}
