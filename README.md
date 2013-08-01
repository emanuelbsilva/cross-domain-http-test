# Cross Domain HTTP Test

cross-domain-http-test is a test to run 3 different express servers, in different domains, to test if cross domain HTTP requests work under iframes on different browsers. 

It also serves as an example on how to support CORS down to IE 8.

## Description of each server

- **iframe_server**: 
    - Entry point of the test
    - Serves an html file with an iframe that request a page of script_server
- **script_server**:
    - Serves an html file which includes a javascript file that makes a GET and a POST request to the backend_server
    - Writes the backend_server responses to the DOM
- **backend_server**:
    - Responds to POST and GET requests with a simple string.

## Installing and Running

  Append the following lines in /etc/hosts:
  
    127.0.0.1 iframe.test
    127.0.0.1	script.test
    127.0.0.1	backend.test

  Install dependencies:

    $ npm install

  Run the test:

    $ coffee src/run_server.coffee
