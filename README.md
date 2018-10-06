# RomanJS

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