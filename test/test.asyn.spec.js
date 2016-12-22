// $ mocha test/test.asyn.spec.js

var assert = require('assert');
var fs = require('fs');
var muk = require('muk')

// 测试 fs readFile 是否能正常运行
describe('Read File, fs.readFile should be ok', function() {
  it('should without error', function(done) {
    fs.readFile('src/index.js', 'utf-8', function (err, data) {
      console.log('data0-0', data);
      if (!err) {
        done();
      }
    });
  });
});

describe.skip('Set time out', function() {
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

// 测试 mock fs readFile 是否能正常运行
describe('Read File, mock', function() {
  beforeEach(function() {
    // muk(fs, 'readFileSync', function(path, encoding) {
    //   throw new Error('mock readFileSync error');
    // });

    muk(fs, 'readFile', function(path, encoding, callback) {
      process.nextTick(function () {
        callback(new Error("mock readFile error"));
      });
    });
    console.log('check fs.readFile isMocked', muk.isMocked(fs, 'readFile'));
  });

  it('should read file error', function(done) {
    fs.readFile('src/index.js', 'utf-8', function (err, data) {
      console.log('err info', err);
      if ((err instanceof Error) && /mock readFile error/.test(err)) {
        done();
      }
    });
  });

  afterEach(function() {
    muk.restore();

    fs.readFile('src/index.js', 'utf-8', function (err, data) {
      console.log('data x xxxx', data, 'end xxxx');
    });
  });
});

// 测试外面的 fs readFile 是否能正常运行
describe('Read File, fs.readFile should be ok', function() {
  it('should without error', function(done) {
    fs.readFile('src/index.js', 'utf-8', function (err, data) {
      console.log('data0-1', data);
      if (!err) {
        done();
      }
    });
  });
});
