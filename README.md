# RomanJS

![npm](https://img.shields.io/npm/v/romanjs.svg)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/romanjs.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NpmLicense](https://img.shields.io/npm/l/romanjs.svg)

Converts numbers from decimal to roman and vice versa

## Installation

`$ npm install romanjs`

## Usage

```js
const romanjs = require('romanjs');

const romanNumber = romanjs.roman(23);
const decimalNumber = romanjs.decimal('XXIII');

console.log(romanNumber); // XXIII
console.log(decimalNumber); // 23
```

## License

RomanJS is under [MIT License](/LICENSE).
