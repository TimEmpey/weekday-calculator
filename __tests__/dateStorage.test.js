import DateStorage from '../src/dateStorage.js';

describe('DateStorage', () => {

  test('should correctly create a date object with month, day, and year', () => {
    const input = new DateStorage("August", 31, 2022)
    expect(DateStorage.month).toEqual("August");
    expect(DateStorage.day).toEqual(31);
    expect(DateStorage.year).toEqual(2022);
  });
});