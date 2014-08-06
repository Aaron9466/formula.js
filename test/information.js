var error = require('../lib/error');
var information = require('../lib/information');
var should = require('should');

suite('Information', function() {
  // TODO
  test('CELL', function() {
    should.equal(information.CELL(), undefined);
  });

  test('ERROR.TYPE', function() {
    information.ERROR.TYPE(error.nil).should.equal(1);
    information.ERROR.TYPE(error.div0).should.equal(2);
    information.ERROR.TYPE(error.value).should.equal(3);
    information.ERROR.TYPE(error.ref).should.equal(4);
    information.ERROR.TYPE(error.name).should.equal(5);
    information.ERROR.TYPE(error.num).should.equal(6);
    information.ERROR.TYPE(error.na).should.equal(7);
    information.ERROR.TYPE(error.data).should.equal(8);
    information.ERROR.TYPE(1).should.equal(error.na);
  });

  // TODO
  test('INFO', function() {
    should.equal(information.INFO(), undefined);
  });

  test('ISBLANK', function() {
    information.ISBLANK(null).should.equal(true);
    information.ISBLANK(1).should.equal(false);
  });

  test('ISERR', function() {
    information.ISERR(1).should.equal(false);
    information.ISERR(error.na).should.equal(false);
    information.ISERR(error.value).should.equal(true);
    information.ISERR(NaN).should.equal(true);
    information.ISERR(1/0).should.equal(true);
  });

  test('ISERROR', function() {
    information.ISERROR(1).should.equal(false);
    information.ISERROR(error.na).should.equal(true);
    information.ISERROR(error.value).should.equal(true);
  });

  test('ISEVEN', function() {
    information.ISEVEN(-1).should.equal(false);
    information.ISEVEN(2.5).should.equal(true);
    information.ISEVEN(5).should.equal(false);
    information.ISEVEN(0).should.equal(true);
  });

  // TODO
  test('ISFORMULA', function() {
    should.equal(information.ISFORMULA(), undefined);
  });

  test('ISLOGICAL', function() {
    information.ISLOGICAL(true).should.equal(true);
    information.ISLOGICAL(false).should.equal(true);
    information.ISLOGICAL(1).should.equal(false);
    information.ISLOGICAL('true').should.equal(false);
  });

  test('ISNA', function() {
    information.ISNA(error.na).should.equal(true);
    information.ISNA(1).should.equal(false);
  });

  test('ISNONTEXT', function() {
    information.ISNONTEXT(1).should.equal(true);
    information.ISNONTEXT(true).should.equal(true);
    information.ISNONTEXT('a').should.equal(false);
  });
});
