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

describe('Set time out', function() {
  it('asyn test', function(done) {
    setTimeout(done, 1990);
  });
  it('asyn test', function(done) {
    function done2 () {
      console.log('done2')
      setTimeout(done, 980);
    }
    setTimeout(done, 1000);
    // setTimeout(done2, 4000);
    // $ mocha test/test.asyn.spec.js -t 5000
  });

  // it('asyn test2', function() {
  //   assert.throws(
  //     function() {
  //       return new Error();
  //     },
  //     function(err) {
  //       console.info('err', err);
  //       return true;
  //     },
  //     'Timeout of 2000ms exceeded!!!'
  //   );
  // });
});
