// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBoolean
 * @summary Tests for a boolean value.
 * @description
 * Checks to see if the input value is a JavaScript boolean.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBoolean } from '@krypto-wealth/util';
 *
 * isBoolean(false); // => true
 * ```
 */
export function isBoolean (value: unknown): value is boolean {
  return typeof value === 'boolean';
}
