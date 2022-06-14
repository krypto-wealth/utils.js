// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@krypto-wealth/util/types';

import { isHex } from '@krypto-wealth/util';

import { isEthereumChecksum } from './isChecksum';

export function isEthereumAddress (address?: HexString | string): boolean {
  if (!address || address.length !== 42 || !isHex(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }

  return isEthereumChecksum(address);
}