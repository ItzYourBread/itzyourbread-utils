<div align="center">🍞 @itzyourbread/utilsAll-in-one utility library for Node.js & the browser with TypeScript support.</div>Provides a comprehensive collection of reusable utility functions for strings, arrays, objects, dates, files, networks, and miscellaneous helpers. Lightweight, modular, and production-ready.✨ Features🔤 String Utilities: capitalize, truncate, cleanString, slugify, randomString📦 Array / Object Utilities: uniqueBy, chunk, shuffle, flatten, pickRandom⏳ Date / Time Utilities: formatDate, convertTZ, timer📁 File / Path Utilities: formatBytes, exists, readJSON, writeJSON, normalizePath🌐 Network Utilities: retryFetch, buildQuery, rateLimit🛠️ Miscellaneous Utilities: envInfo, debounce, throttle, generateUUID🚀 InstallationInstall the package via your preferred package manager:# Using npm
npm install @itzyourbread/utils

# Using yarn
yarn add @itzyourbread/utils

# Using pnpm
pnpm add @itzyourbread/utils
💻 UsageImport Entire Libraryconst utils = require("@itzyourbread/utils");

console.log(utils.capitalize("hello world")); 
// Output: "Hello world"
Import Specific Functions (Recommended)const { capitalize, slugify, chunk } = require("@itzyourbread/utils");

console.log(capitalize("hello")); 
// Output: "Hello"

console.log(slugify("Hello World", "camel")); 
// Output: "helloWorld"

console.log(chunk([1, 2, 3, 4, 5], 2)); 
// Output: [[1, 2], [3, 4], [5]]
TypeScript ImportThe library is fully typed. You can import and use it seamlessly in your TypeScript projects:import { capitalize, chunk, flatten } from "@itzyourbread/utils";

const text: string = capitalize("hello world");
const chunks: number[][] = chunk([1, 2, 3, 4], 2);
const flat: number[] = flatten([1, [2, 3], [4, [5]]]);
📚 API Reference🔤 String UtilitiesFunctionExampleOutputcapitalizecapitalize("hello")"Hello"truncatetruncate("This is long", 7)"This is …"cleanStringcleanString("  Hello! @World# ")"Hello World"slugifyslugify("Hello World", "snake")"hello_world"randomStringrandomString(8)"A1b2C3d4"📦 Array / Object UtilitiesFunctionExampleOutputuniqueByuniqueBy([{id:1},{id:2},{id:1}], "id")[{id:1}, {id:2}]chunkchunk([1, 2, 3, 4, 5], 2)[[1, 2], [3, 4], [5]]shuffleshuffle([1, 2, 3, 4])[3, 1, 4, 2] (random)flattenflatten([1, [2, 3], [4, [5]]])[1, 2, 3, 4, 5]pickRandompickRandom([10, 20, 30])20 (random)⏳ Date / Time UtilitiesFunctionExampleOutputformatDateformatDate(new Date())"2026-03-18T12:27:38.078Z"formatDateformatDate(new Date(), true)"0 seconds ago"convertTZconvertTZ(new Date(), "Asia/Dhaka")Date objecttimertimer(() => { /* code */ }){ result, ms }📁 File / Path UtilitiesFunctionExampleOutputformatBytesformatBytes(10240)"10.00 KB"existsexists("./file.json")true / falsereadJSONreadJSON("./file.json"){ ... } (parsed object)writeJSONwriteJSON("./file.json", {hello:"world"})Writes to filenormalizePathnormalizePath("folder\\file.txt")"folder/file.txt"🌐 Network UtilitiesFunctionExampleOutputretryFetchawait retryFetch("https://api.url")Response objectbuildQuerybuildQuery({a: 1, b: "hello"})"a=1&b=hello"rateLimitconst limited = rateLimit(fn, 500)Rate-limited function🛠️ Miscellaneous UtilitiesFunctionExampleOutputenvInfoenvInfo(){ node: true, env: "dev", os: "linux" }debounceconst debounced = debounce(fn, 300)Debounced functionthrottleconst throttled = throttle(fn, 500)Throttled functiongenerateUUIDgenerateUUID()"b3889f88-decb-...-eff0"📌 Notes✅ Works seamlessly in both Node.js and browser environments.✅ Modular imports allow you to reduce your final bundle size by only including what you need.✅ Small, lightweight, and production-ready.✅ Fully typed for TypeScript out of the box.📄 LicenseMIT © Arif Satify