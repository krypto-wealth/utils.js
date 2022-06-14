// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as netInfo } from '@krypto-wealth/networks/packageInfo';
import { detectPackage, packageInfo as utilInfo } from '@krypto-wealth/util';
import { packageInfo as randomInfo } from '@krypto-wealth/x-randomvalues';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [netInfo, utilInfo, randomInfo]);
