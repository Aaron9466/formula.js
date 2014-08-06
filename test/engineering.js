var error = require('../lib/error');
var engineering = require('../lib/engineering');
var should = require('should');

suite('Engineering', function() {
  // TODO
  test('BESSELI', function() {
    should.equal(engineering.BESSELI(), undefined);
  });


  // TODO
  test('BESSELJ', function() {
    should.equal(engineering.BESSELJ(), undefined);
  });


  // TODO
  test('BESSELK', function() {
    should.equal(engineering.BESSELK(), undefined);
  });


  // TODO
  test('BESSELY', function() {
    should.equal(engineering.BESSELY(), undefined);
  });

  test('BIN2DEC', function() {
    engineering.BIN2DEC(1100100).should.equal(100);
    engineering.BIN2DEC(1111111111).should.equal(-1);
    engineering.BIN2DEC('a').should.equal(error.num);
  });

  test('BIN2HEX', function() {
    engineering.BIN2HEX(11111011, 4).should.equal('00fb');
    engineering.BIN2HEX(1110).should.equal('e');
    engineering.BIN2HEX(1111111111).should.equal('ffffffffff');
    engineering.BIN2HEX('a').should.equal(error.num);
    engineering.BIN2HEX(1, 'a').should.equal(error.value);
    engineering.BIN2HEX(1, -1).should.equal(error.num);
  });

  test('BIN2OCT', function() {
    engineering.BIN2OCT(1001, 3).should.equal('011');
    engineering.BIN2OCT(1100100).should.equal('144');
    engineering.BIN2OCT(1111111111).should.equal('7777777777');
    engineering.BIN2OCT('a').should.equal(error.num);
    engineering.BIN2OCT(1, 'a').should.equal(error.value);
    engineering.BIN2OCT(1, -1).should.equal(error.num);
  });

  test('BITAND', function() {
    engineering.BITAND(1, 5).should.equal(1);
    engineering.BITAND(13,25).should.equal(9);
    engineering.BITAND('a', 1).should.equal(error.value);
    engineering.BITAND(-1, 1).should.equal(error.num);
    engineering.BITAND(1.1, 1).should.equal(error.num);
    engineering.BITAND(281474976710656, 1).should.equal(error.num);
  });
});
