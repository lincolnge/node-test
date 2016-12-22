// $ mocha test/test.privacy.spec.js

describe('Test privacy function', function() {
  it('should without error', function() {
    var rewire = require('rewire');
    var src = rewire('../src');
    var litmit = src.__get__('limit');
    console.log(litmit(10));
  });
});
