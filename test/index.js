'use strict';

var should = require('chai').should();
var digicore = require('../');

describe('#versionGuard', function() {
  it('global._digicore should be defined', function() {
    should.equal(global._digicore, digicore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      digicore.versionGuard('version');
    }).should.throw('More than one instance of digicore');
  });
});
