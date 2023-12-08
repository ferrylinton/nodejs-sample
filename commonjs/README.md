#   Node JS

Node.js has two module systems: CommonJS modules and ECMAScript modules.

#   Reference

-   [Node#modules](https://nodejs.org/api/modules.html)
-   [Node#determining-module-system](https://nodejs.org/api/packages.html#determining-module-system)

##  CommonJS modules

CommonJS modules are the original way to package JavaScript code for Node.js

### Sample

***commonjs\src\services\file-service.js***

```js
const fs = require('fs');

exports.isDirectory = (path) => {
    return fs.statSync(path).isDirectory()
}
```

***commonjs\src\index.js***

```js
const { isDirectory } = require('./services/file-service.js');

const result = isDirectory(process.cwd());
console.log('result : ', result);
```

##  ECMAScript modules

ECMAScript modules are the official standard format to package JavaScript code for reuse

### Sample

***ecmascript\src\services\file-service.mjs***

```js
import fs from 'fs';

export const isDirectory = (path) => {
    return fs.statSync(path).isDirectory()
}
```

***ecmascript\src\index.mjs***

```js
import { isDirectory } from './services/file-service.mjs';

const result = isDirectory(process.cwd());
console.log('result : ', result);
```


