'use strict';

const fs = require('fs');
const cp = require('child_process');
const net = require('net');
const config = require('../config');

var client = null;

function connect() {
  return net.connect({port: config.port}, function () {
    if (client !== null) {
      client.write('hello');
    }
  });
}

function start(app) {
  if (client === null) {
    client = connect();
    client.on('data', function (data) {
      app.quit();
      client.end();
      client = null;
    });
  }
}

function watch(app, files) {
  const opts = { persistent: true, recursive: true };
  files.forEach(file => {
    fs.watch(file, opts, function (event, filename) {
      start(app);
    });
  });
}

module.exports = {
  'watch': watch
};
