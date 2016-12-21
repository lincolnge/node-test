var assert = require('assert');
var fs = require('fs');

describe('Read File, fs.readFile should be ok', function() {
  it('should without error', function(done) {
    fs.readFile('src/index.js', 'utf-8', function (err, data) {
      if (!err) {
        done();
      }
    });
  });
});
