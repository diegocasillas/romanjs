const roman = require('../src/converters/roman');

test('throws on empty', () => {
  expect(() => roman()).toThrow();
});

test('throws on undefined', () => {
  expect(() => roman(undefined)).toThrow();
});

test('throws on null', () => {
  expect(() => roman(null)).toThrow();
});

test('throws on string', () => {
  expect(() => roman('1')).toThrow();
});

test('throws on float number', () => {
  expect(() => roman(1.5)).toThrow();
});

test('throws on less than 0', () => {
  expect(() => roman(-1)).toThrow();
});

test('throws on bigger than 3999', () => {
  expect(() => roman(4000)).toThrow();
});

test('returns empty string if number is 0', () => {
  expect(roman(0)).toBe('');
})

test('converts 1 to I', () => {
  expect(roman(1)).toBe('I');
});

test('converts 2 to II', () => {
  expect(roman(2)).toBe('II');
});

test('converts 3 to III', () => {
  expect(roman(3)).toBe('III');
});

test('converts 4 to IV', () => {
  expect(roman(4)).toBe('IV');
});

test('converts 5 to V', () => {
  expect(roman(5)).toBe('V');
});

test('converts 6 to VI', () => {
  expect(roman(6)).toBe('VI');
});

test('converts 7 to VII', () => {
  expect(roman(7)).toBe('VII');
});

test('converts 8 to VIII', () => {
  expect(roman(8)).toBe('VIII');
});

test('converts 9 to IX', () => {
  expect(roman(9)).toBe('IX');
});

test('converts 10 to X', () => {
  expect(roman(10)).toBe('X');
});

test('converts 20 to XX', () => {
  expect(roman(20)).toBe('XX');
});

test('converts 30 to XXX', () => {
  expect(roman(30)).toBe('XXX');
});

test('converts 40 to XL', () => {
  expect(roman(40)).toBe('XL');
});

test('converts 50 to L', () => {
  expect(roman(50)).toBe('L');
});

test('converts 60 to LX', () => {
  expect(roman(60)).toBe('LX');
});

test('converts 70 to LXX', () => {
  expect(roman(70)).toBe('LXX');
});

test('converts 80 to LXXX', () => {
  expect(roman(80)).toBe('LXXX');
});

test('converts 90 to XC', () => {
  expect(roman(90)).toBe('XC');
});

test('converts 100 to C', () => {
  expect(roman(100)).toBe('C');
});

test('converts 200 to CC', () => {
  expect(roman(200)).toBe('CC');
});

test('converts 300 to CCC', () => {
  expect(roman(300)).toBe('CCC');
});

test('converts 400 to CD', () => {
  expect(roman(400)).toBe('CD');
});

test('converts 500 to D', () => {
  expect(roman(500)).toBe('D');
});

test('converts 600 to DC', () => {
  expect(roman(600)).toBe('DC');
});

test('converts 700 to DCC', () => {
  expect(roman(700)).toBe('DCC');
});

test('converts 800 to DCCC', () => {
  expect(roman(800)).toBe('DCCC');
});

test('converts 900 to CM', () => {
  expect(roman(900)).toBe('CM');
});

test('converts 1000 to M', () => {
  expect(roman(1000)).toBe('M');
});

test('converts 2000 to MM', () => {
  expect(roman(2000)).toBe('MM');
});

test('converts 3000 to MMM', () => {
  expect(roman(3000)).toBe('MMM');
});

test('converts 3999 to MMMCMXCIX', () => {
  expect(roman(3999)).toBe('MMMCMXCIX');
});