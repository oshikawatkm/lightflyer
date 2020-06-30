function inpreparation(req, res) {
  console.log("Request handler 'start' was called.");

  var body = 'This method is in preparation';

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(body);
  res.end();
}

exports.inpreparation = inpreparation;