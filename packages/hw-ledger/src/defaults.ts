// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type Transport from '@ledgerhq/hw-transport';
import type { SubstrateApp } from '@zondax/ledger-substrate';

import { newKweApp } from '@zondax/ledger-substrate';

// These match up with the keys of the knownLedger object in the @krypto-wealth/networks/defaults.ts
export const ledgerApps: Record<string, (transport: Transport) => SubstrateApp> = {
  'kwe-mainnet': newKweApp,
  'kwe-testnet': newKweApp
};
