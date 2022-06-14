// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@krypto-wealth/dev/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/util(.*)$': '<rootDir>/packages/util/src/$1',
    '@polkadot/x-(fetch|randomvalues|textdecoder|textencoder|ws)(.*)$': '<rootDir>/packages/x-$1/src/node',
    '@krypto-wealth/hw-ledger-transports(.*)$': '<rootDir>/packages/hw-ledger-transports/src/node',
    // eslint-disable-next-line sort-keys
    '@krypto-wealth/hw-ledger(.*)$': '<rootDir>/packages/hw-ledger/src/$1',
    '@krypto-wealth/keyring(.*)$': '<rootDir>/packages/keyring/src/$1',
    '@krypto-wealth/networks(.*)$': '<rootDir>/packages/networks/src/$1',
    '@krypto-wealth/util-(crypto)(.*)$': '<rootDir>/packages/util-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@krypto-wealth/util(.*)$': '<rootDir>/packages/util/src/$1',
    '@krypto-wealth/x-(fetch|randomvalues|textdecoder|textencoder|ws)(.*)$': '<rootDir>/packages/x-$1/src/node',
    '@krypto-wealth/x-global(.*)$': '<rootDir>/packages/x-global/src/$1',
    '@krypto-wealth/x-rxjs(.*)$': '<rootDir>/packages/x-rxjs/src/$1'
  }
});
