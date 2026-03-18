@itzyourbread/utils

<p align="left">
<img src="https://www.google.com/search?q=https://img.shields.io/npm/v/%40itzyourbread/utils%3Fcolor%3Dbrightgreen%26style%3Dflat-square" alt="npm version">
<img src="https://www.google.com/search?q=https://img.shields.io/github/license/itzyourbread/utils%3Fcolor%3Dblue%26style%3Dflat-square" alt="license">
<img src="https://www.google.com/search?q=https://img.shields.io/bundlephobia/min/%40itzyourbread/utils%3Fstyle%3Dflat-square" alt="bundle size">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/TypeScript-Ready-blue%3Flogo%3Dtypescript%26style%3Dflat-square" alt="typescript">
</p>

The Swiss Army Knife for modern JavaScript/TypeScript development. A comprehensive, lightweight, and modular utility library designed for both Node.js and the browser.

✨ Features • 🚀 Installation • 💡 Usage • 📖 API Documentation • 📄 License

✨ Features

🔤 String: Slugify, truncate, and clean strings with ease.

📦 Array & Object: Powerful helpers like uniqueBy, shuffle, and chunk.

📅 Date & Time: Human-readable formatting and timezone conversions.

📁 File System: Simplified JSON I/O and path normalization.

🌐 Network: Built-in retryFetch and query builders.

🛠️ Misc: High-performance debounce, throttle, and UUID generators.

🚀 Installation

Install via your favorite package manager:

# Using npm
npm install @itzyourbread/utils

# Using yarn
yarn add @itzyourbread/utils

# Using pnpm
pnpm add @itzyourbread/utils


💡 Usage

CommonJS (Node.js)

const { capitalize, chunk } = require("@itzyourbread/utils");

console.log(capitalize("hello world")); // "Hello world"


ESM / TypeScript

import { slugify, timer } from "@itzyourbread/utils";

const slug = slugify("Hello World!", "camel"); // "helloWorld"


📖 API Documentation

🔤 String Utilities

Function

Description

Example

capitalize

Capitalizes the first letter

capitalize("hi") -> "Hi"

truncate

Shortens string with ellipsis

truncate("Long text", 5) -> "Long…"

slugify

Creates URL-friendly strings

slugify("Hello World", "snake") -> "hello_world"

randomString

Generates random alphanumeric

randomString(8) -> "A1b2C3d4"

📦 Array & Object Utilities

Function

Description

Example

uniqueBy

Filters unique items by key

uniqueBy(arr, 'id')

chunk

Splits array into sizes

chunk([1,2,3,4], 2) -> [[1,2],[3,4]]

flatten

Flattens nested arrays

flatten([1, [2]]) -> [1, 2]

pickRandom

Gets random element

pickRandom([1, 2, 3])

📅 Date & Time Utilities

Function

Description

Example

formatDate

Formats date or relative time

formatDate(new Date(), true) -> "2 mins ago"

convertTZ

Converts to specific timezone

convertTZ(date, "Asia/Dhaka")

timer

Measures execution time

timer(() => fn()) -> { result, ms }

📁 File & Network Utilities

Function

Description

Example

formatBytes

Human-readable file sizes

formatBytes(10240) -> "10.00 KB"

retryFetch

Fetch with automatic retries

await retryFetch(url, { retries: 3 })

buildQuery

Object to query string

buildQuery({id: 1}) -> "id=1"

🛠️ Advanced Helpers

Performance Tools

Use debounce and throttle to optimize event listeners or API calls.

const handleSearch = debounce((query) => searchAPI(query), 300);


System & Environment

Get instant info about your current execution environment.

console.log(envInfo()); // { node: '20.x', os: 'linux', env: 'production' }


📝 Notes

✅ Zero Dependencies: Keeps your bundle size tiny.

✅ Tree-shakable: Only include what you use.

✅ Type Safe: Written in TypeScript for excellent IDE support.

📄 License

MIT © Arif Satify