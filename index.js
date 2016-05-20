'use strict';

var digicore = module.exports;

// module information
digicore.version = 'v' + require('./package.json').version;
digicore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of digicore-lib found. ' + 
      'Please make sure to require digicore-lib and check that submodules do' +
      ' not also include their own digicore-lib dependency.';
    throw new Error(message);
  }
};
digicore.versionGuard(global._digicore);
global._digicore = digicore.version;

// crypto
digicore.crypto = {};
digicore.crypto.BN = require('./lib/crypto/bn');
digicore.crypto.ECDSA = require('./lib/crypto/ecdsa');
digicore.crypto.Hash = require('./lib/crypto/hash');
digicore.crypto.Random = require('./lib/crypto/random');
digicore.crypto.Point = require('./lib/crypto/point');
digicore.crypto.Signature = require('./lib/crypto/signature');

// encoding
digicore.encoding = {};
digicore.encoding.Base58 = require('./lib/encoding/base58');
digicore.encoding.Base58Check = require('./lib/encoding/base58check');
digicore.encoding.BufferReader = require('./lib/encoding/bufferreader');
digicore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
digicore.encoding.Varint = require('./lib/encoding/varint');

// utilities
digicore.util = {};
digicore.util.buffer = require('./lib/util/buffer');
digicore.util.js = require('./lib/util/js');
digicore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
digicore.errors = require('./lib/errors');

// main bitcoin library
digicore.Address = require('./lib/address');
digicore.Block = require('./lib/block');
digicore.MerkleBlock = require('./lib/block/merkleblock');
digicore.BlockHeader = require('./lib/block/blockheader');
digicore.HDPrivateKey = require('./lib/hdprivatekey.js');
digicore.HDPublicKey = require('./lib/hdpublickey.js');
digicore.Networks = require('./lib/networks');
digicore.Opcode = require('./lib/opcode');
digicore.PrivateKey = require('./lib/privatekey');
digicore.PublicKey = require('./lib/publickey');
digicore.Script = require('./lib/script');
digicore.Transaction = require('./lib/transaction');
digicore.URI = require('./lib/uri');
digicore.Unit = require('./lib/unit');

// dependencies, subject to change
digicore.deps = {};
digicore.deps.bnjs = require('bn.js');
digicore.deps.bs58 = require('bs58');
digicore.deps.Buffer = Buffer;
digicore.deps.elliptic = require('elliptic');
digicore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
digicore._HDKeyCache = require('./lib/hdkeycache');
digicore.Transaction.sighash = require('./lib/transaction/sighash');
