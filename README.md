# 🚀 @itzyourbread/utils

> **All-in-one utility library for Node.js & browser with full TypeScript support**

A clean, modular, and production-ready collection of reusable utility functions for **strings, arrays, objects, dates, files, networking, and more**.

---

## ✨ Features

- 🔤 **String Utilities** — `capitalize`, `truncate`, `cleanString`, `slugify`, `randomString`
- 📦 **Array / Object Utilities** — `uniqueBy`, `chunk`, `shuffle`, `flatten`, `pickRandom`
- ⏱️ **Date / Time Utilities** — `formatDate`, `convertTZ`, `timer`
- 📁 **File / Path Utilities** — `formatBytes`, `exists`, `readJSON`, `writeJSON`, `normalizePath`
- 🌐 **Network Utilities** — `retryFetch`, `buildQuery`, `rateLimit`
- ⚙️ **Misc Utilities** — `envInfo`, `debounce`, `throttle`, `generateUUID`

---

## 📦 Installation

```bash
# npm
npm install @itzyourbread/utils

# yarn
yarn add @itzyourbread/utils
```

---

## 🧠 Usage

### Import Entire Library

```js
const utils = require("@itzyourbread/utils");

console.log(utils.capitalize("hello world"));
// → Hello world
```

### Import Specific Functions

```js
const { capitalize, slugify, chunk } = require("@itzyourbread/utils");

console.log(capitalize("hello"));
// → Hello

console.log(slugify("Hello World", "camel"));
// → helloWorld

console.log(chunk([1,2,3,4,5], 2));
// → [[1,2],[3,4],[5]]
```

### TypeScript

```ts
import { capitalize, chunk, flatten } from "@itzyourbread/utils";

const text: string = capitalize("hello world");
const chunks: number[][] = chunk([1,2,3,4], 2);
const flat: number[] = flatten([1,[2,3],[4,[5]]]);
```

---

## 🔤 String Utilities

```js
capitalize("hello")
// → "Hello"

truncate("This is long", 7)
// → "This is …"

cleanString("  Hello! @World# ")
// → "Hello World"

slugify("Hello World", "snake")
// → "hello_world"

randomString(8)
// → "A1b2C3d4"
```

---

## 📦 Array / Object Utilities

```js
uniqueBy([{id:1},{id:2},{id:1}], "id")
// → [{id:1},{id:2}]

chunk([1,2,3,4,5], 2)
// → [[1,2],[3,4],[5]]

shuffle([1,2,3,4])
// → [random order]

flatten([1,[2,3],[4,[5]]])
// → [1,2,3,4,5]

pickRandom([10,20,30])
// → 20 (random)
```

---

## ⏱️ Date / Time Utilities

```js
formatDate(new Date())
// → 2026-03-18T12:27:38.078Z

formatDate(new Date(), true)
// → "0 seconds ago"

convertTZ(new Date(), "Asia/Dhaka")
// → Date object

timer(() => { /* code */ })
// → { result, ms }
```

---

## 📁 File / Path Utilities

```js
formatBytes(10240)
// → "10.00 KB"

exists("./file.json")
// → true / false

readJSON("./file.json")
// → { ... }

writeJSON("./file.json", { hello: "world" })

normalizePath("folder\\file.txt")
// → "folder/file.txt"
```

---

## 🌐 Network Utilities

```js
await retryFetch("https://jsonplaceholder.typicode.com/todos/1");

buildQuery({ a: 1, b: "hello" })
// → "a=1&b=hello"

const limited = rateLimit(fn, 500);
```

---

## ⚙️ Miscellaneous Utilities

```js
envInfo()
// → { node, env, os }

debounce(fn, 300);
throttle(fn, 500);

generateUUID()
// → "b3889f88-decb-4791-ae77-cce83743eff0"
```

---

## 📌 Notes

- Works in both **Node.js** and **browser** environments
- Supports **tree-shaking** via modular imports
- Lightweight and optimized for **production use**
- Fully typed with **TypeScript**

---

## 📄 License

MIT © Arif Satify
