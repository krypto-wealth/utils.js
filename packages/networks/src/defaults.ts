// Copyright 2017-2021 @polkadot/networks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KnownGenesis, KnownIcon, KnownLedger, KnownTestnet } from './types';

export const substrateRegistry = 'https://raw.githubusercontent.com/paritytech/ss58-registry/main/ss58-registry.json';

// NOTE: In the case where the network was hard-spooned and multiple genesisHashes
// are provided, it needs to be in reverse order, i.e. most-recent first, oldest
// last. This make lookups for the current a simple genesisHash[0]
// (See Kusama as an example)
export const knownGenesis: KnownGenesis = {
  'kwe-mainnet': [
    '0x7834781d38e4798d548e34ec947d19deea29df148a7bf32484b7b24dacf8d4b7'
  ],
  'kwe-testnet': [
    '0x0f89efd7bf650f2d521afef7456ed98dff138f54b5b7915cc9bce437ab728660'
  ]
};

// these are icon overrides
export const knownIcon: KnownIcon = {
  centrifuge: 'polkadot',
  kusama: 'polkadot',
  polkadot: 'polkadot',
  statemine: 'polkadot',
  statemint: 'polkadot',
  westmint: 'polkadot'
};

// These match up with the keys of the ledgerApps object in the @krypto-wealth/hw-ledger/defaults.ts
// and maps to the known slip44 (minus the `0x8` hard derivation flag)
// NOTE: Any network here needs to have a genesisHash attached in the config above
export const knownLedger: KnownLedger = {
  'kwe-mainnet': 0x00000333,
  'kwe-testnet': 0x00000333
};

// testnets should not allow selection
export const knownTestnet: KnownTestnet = {
  '': true, // this is the default non-network entry
  'cess-testnet': true,
  'dock-testnet': true,
  jupiter: true,
  'mathchain-testnet': true,
  'zero-alphaville': true
};
