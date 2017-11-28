"use strict";

var express = require('express');
var app = express();

app.get("/", function (req, res) {
  var h = req.headers;
  res.json(
    {
      ip_address: h["x-forwarded-for"].split(',')[0], 
      language: h["accept-language"].split(',')[0], 
      operating_system: h["user-agent"]
                          .slice(h["user-agent"]
                          .indexOf('(') + 1, h["user-agent"]
                          .indexOf(')'))
    }
  );
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
