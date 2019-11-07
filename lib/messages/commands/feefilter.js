'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var auroracoin = require('auroracoin');
var utils = require('../utils');
var BufferReader = auroracoin.encoding.BufferReader;
var BufferWriter = auroracoin.encoding.BufferWriter;

/**
 * @param {Array=} arg - An array of addrs
 * @param {Object=} options
 * @extends Message
 * @constructor
 */
function FeeFilter(arg, options) {
  Message.call(this, options);
  this.command = 'feefilter';
  this.minFee = null;
}
inherits(FeeFilter, Message);

FeeFilter.prototype.setPayload = function(payload) {
  var parser = new BufferReader(payload);
  this.minFee = parser.readUInt64LEBN();
  utils.checkFinished(parser);
};

FeeFilter.prototype.getPayload = function() {
  var bw = new BufferWriter();
  bw.writeUInt64LEBN(this.minFee);
  return bw.concat();
};

module.exports = FeeFilter;
