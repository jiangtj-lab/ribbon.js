# ribbon.js

this is a fork from `https://github.com/hustcc/ribbon.js`, add support for node.

## usage

Very easy and simple.

```bash
yarn add @jiangtj/ribbon.js
```

```js
import ribbon from '@jiangtj/ribbon.js';

// use
ribbon()
// or
ribbon({
  z: -1, // z-index
  a: 0.6, // alpha
  s: 90, // size
  target: 'body'
})
```

If you use vue, `Please add it in mounted()`.
