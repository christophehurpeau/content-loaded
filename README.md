# content-loaded [![NPM version][npm-image]][npm-url]

use `document.readyState` and `document.addEventListener('DOMContentLoaded')` to resolve the Promise telling you when the browser is ready.

## Quick example

```js
import contentLoaded from 'content-loaded';

contentLoaded()
    .then(() => console.log('contentLoaded !'));
```

[npm-image]: https://img.shields.io/npm/v/content-loaded.svg?style=flat-square
[npm-url]: https://npmjs.org/package/content-loaded
