'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on auroracoin-p2p Module {0}'
};

module.exports = require('auroracoin').errors.extend(spec);
