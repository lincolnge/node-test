// ╰─$ istanbul cover _mocha test/test.sqrt.chai.spec.js

var chai = require('chai');
var expect = chai.expect;

var My = require('../src/sqrt.js');

describe('chai sqrt', function() {

  it('4的平方根应该等于', function() {
    expect(My.sqrt(4)).to.equal(2);
  });

  it('参数为负值时应该报错', function() {
    expect(function(){ My.sqrt(3); }).to.not.throw('负值没有平方根');
    expect(function(){ My.sqrt(-1); }).to.throw('负值没有平方根');
  });
});
