# @krypto-wealth/x-global

A cross-environment global object. checks for global > self > window > this.

Install it via `yarn add @krypto-wealth/x-global`

```js
import { xglobal } from '@krypto-wealth/x-global';

console.log(typeof xglobal.TextEncoder);
```
