#!/usr/bin/env node

var http = require('http')
  , port = parseInt(process.argv[2] || 8888, 10)
  , link = process.argv[3] || 'http://xpeppers.com'

http.createServer(function(req, res){
  req.body = ''
  req.on('data', function (data) {
    req.body += data
  })
  req.on('end', function () {
    console.log('[%s] %s %s', req.method, req.url, req.body)
  })
  res.writeHead(200, {'Content-Type': 'text/hatm'})
  res.write(link)
  res.end()
}).listen(port)

console.log('[init] fake service is listening on port %d and forwarding %s ...', port, link)