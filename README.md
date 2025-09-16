### NodeJS Training

----
### Day 1

#### Project Setup

- Initialize a new Node.js project:

```bash
npm init -y
```

- Debug Node Application:
  - it opens the chrome dev tools
```bash
node --inspect-brk index.js
```

- Default test library is jest
```bash
npm install --save-dev jest
```

- Run tests
```bash
npm run test
```

- Debugging tests
```bash
node --inspect-brk node_modules/.bin/jest
```

- Add harmony flag to jest
```bash
npm run test -- --harmony-set-methods
```

- Add jest to package.json
```json
"scripts": {
    "test": "jest --node-options=\"--harmony-set-methods\""
  },
  "devDependencies": {
    "jest": "30.1.3"
  }
}
```

---

### Day 2

#### Explaniation between commonjs and es modules

- CommonJS is the default module system in Node.js
- ES modules are the default module system in the browser

## 📦 Node.js Modules

Node.js supports two module systems:

### 1. CommonJS (default)
- Uses `require` / `module.exports`
- Synchronous loading
- Default if you don’t specify `"type"` in `package.json` (or set it to `"commonjs"`)

```js
// add.js
module.exports = (a, b) => a + b;

// main.js
const add = require('./add');
console.log(add(2, 3));
```

### 2. ECMAScript Modules (ESM)

Uses import / export

Asynchronous, preloaded before execution

To enable it, set "type": "module" in package.json
```json
// package.json
{
  "type": "module"
}
```

```js
// add.js
export const add = (a, b) => a + b;

// main.js
import { add } from './add.js';
console.log(add(2, 3));
```

| Feature      | CommonJS (CJS)                 | ECMAScript Modules (ESM) |
| ------------ | ------------------------------ | ------------------------ |
| Syntax       | `require` / `module.exports`   | `import` / `export`      |
| Loading      | Synchronous                    | Asynchronous (preloaded) |
| Origin       | Node.js only                   | JavaScript standard      |
| package.json | `"type": "commonjs"` (default) | `"type": "module"`       |

#### Start server
```bash
node server.js
```

## 🌐 BOM (Browser Object Model)

The **Browser Object Model (BOM)** is everything the browser gives us to interact with the window outside of the webpage content (HTML).  
It represents the **browser environment**, not the document itself.

### 🔑 Key parts of the BOM
- `window` → the main object (represents the browser window).
- `navigator` → information about the browser (user agent, language, online status).
- `screen` → details about the screen (height, width, color depth).
- `location` → the current URL (can change it to navigate).
- `history` → the browser history (go back, forward).

### 📝 Example
```js
console.log(window.innerWidth);   // width of the window
console.log(navigator.language);  // browser language
console.log(location.href);       // current page URL
history.back();                   // go back one page
```

## 🌐 Node.js vs BOM

In the browser, we use the **BOM (Browser Object Model)**:
- `window`, `navigator`, `screen`, `location`, `history`...

But **Node.js doesn’t have BOM**, because it doesn’t run in a browser.  
Instead, Node gives us **its own globals** and modules to interact with the system:

### 🔑 Node.js Globals
- `global` → like `window` in the browser, the global object.
- `process` → info about the current process (env variables, memory, args).
- `__dirname` / `__filename` → current file and directory path.
- `module` / `exports` → module system (CJS).
- `require()` → import CommonJS modules.

### 📝 Example
```js
console.log(global);           // Global object (like window in browser)
console.log(process.platform); // OS platform
console.log(__dirname);        // Directory of the current file
console.log(module);           // Current module
console.log(require);          // require function
```

#### run server with watch flag
```bash
node server.js --watch
```

#### install supertest
```bash
npm install --save-dev supertest
```

