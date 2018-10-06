const decimal = require('../src/converters/decimal');

test('throws on empty', () => {
  expect(() => decimal()).toThrow();
});

test('throws on number', () => {
  expect(() => decimal(1)).toThrow();
});

test('returns 0 on empty string', () => {
  expect(decimal('')).toBe(0);
})

test('converts I to 1', () => {
  expect(decimal('I')).toBe(1);
});

test('converts II to 2', () => {
  expect(decimal('II')).toBe(2);
});

test('converts III to 3', () => {
  expect(decimal('III')).toBe(3);
});

test('converts V to 5', () => {
  expect(decimal('V')).toBe(5);
});

test('converts VI to 6', () => {
  expect(decimal('VI')).toBe(6);
});

test('converts VII to 7', () => {
  expect(decimal('VII')).toBe(7);
});

test('converts VIII to 8', () => {
  expect(decimal('VIII')).toBe(8);
});

test('converts IX to 9', () => {
  expect(decimal('IX')).toBe(9);
});

test('converts X to 10', () => {
  expect(decimal('X')).toBe(10);
});

test('converts XX to 20', () => {
  expect(decimal('XX')).toBe(20);
});

test('converts XXX to 30', () => {
  expect(decimal('XXX')).toBe(30);
});

test('converts XL to 40', () => {
  expect(decimal('XL')).toBe(40);
});

test('converts L to 50', () => {
  expect(decimal('L')).toBe(50);
});

test('converts LX to 60', () => {
  expect(decimal('LX')).toBe(60);
});

test('converts LXX to 70', () => {
  expect(decimal('LXX')).toBe(70);
});

test('converts LXXX to 80', () => {
  expect(decimal('LXXX')).toBe(80);
});

test('converts XC to 90', () => {
  expect(decimal('XC')).toBe(90);
});

test('converts C to 100', () => {
  expect(decimal('C')).toBe(100);
});

test('converts CC to 200', () => {
  expect(decimal('CC')).toBe(200);
});

test('converts CCC to 300', () => {
  expect(decimal('CCC')).toBe(300);
});

test('converts CD to 400', () => {
  expect(decimal('CD')).toBe(400);
});

test('converts D to 500', () => {
  expect(decimal('D')).toBe(500);
});

test('converts DC to 600', () => {
  expect(decimal('DC')).toBe(600);
});

test('converts DCC to 700', () => {
  expect(decimal('DCC')).toBe(700);
});

test('converts DCCC to 800', () => {
  expect(decimal('DCCC')).toBe(800);
});

test('converts CM to 900', () => {
  expect(decimal('CM')).toBe(900);
});

test('converts M to 1000', () => {
  expect(decimal('M')).toBe(1000);
});

test('converts MM to 2000', () => {
  expect(decimal('MM')).toBe(2000);
});

test('converts MMM to 3000', () => {
  expect(decimal('MMM')).toBe(3000);
});

test('converts 3999 to 3999', () => {
  expect(decimal('MMMCMXCIX')).toBe(3999);
});