// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as transportInfo } from '@krypto-wealth/hw-ledger-transports/packageInfo';
import { detectPackage, packageInfo as utilInfo } from '@krypto-wealth/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [transportInfo, utilInfo]);
