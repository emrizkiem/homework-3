const Temperature = require('./temperature');

const temp = new Temperature();

test('test celcius to celcius', () => {
  expect(temp.fromCelcius('celcius', 20)).toBe(20);
});

test('test celcius to farenheit', () => {
  expect(temp.fromCelcius('farenheit', 20)).toBe(68);
});

test('test celcius to reamur', () => {
  expect(temp.fromCelcius('reamur', 20)).toBe(16);
});

test('test farenheit to farenheit', () => {
  expect(temp.fromFarenheit('farenheit', 10)).toBe(10);
});

test('test farenheit to celcius', () => {
  expect(temp.fromFarenheit('celcius', 10)).toBe(-12.222222222222223);
});

test('test farenheit to reamur', () => {
  expect(temp.fromFarenheit('reamur', 10)).toBe(-9.777777777777777);
});

test('test reamur to reamur', () => {
  expect(temp.fromReamur('reamur', 30)).toBe(30);
});

test('test reamur to celcius', () => {
  expect(temp.fromReamur('celcius', 30)).toBe(37.5);
});

test('test reamur to farenheit', () => {
  expect(temp.fromReamur('farenheit', 30)).toBe(99.5);
});