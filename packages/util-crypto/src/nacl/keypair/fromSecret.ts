// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types';

import nacl from 'tweetnacl';

/**
 * @name naclKeypairFromSecret
 * @summary Creates a new public/secret keypair from a secret.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSecret } from '@krypto-wealth/util-crypto';
 *
 * naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function naclKeypairFromSecret (secret: Uint8Array): Keypair {
  return nacl.sign.keyPair.fromSecretKey(secret);
}
