import DateStorage from '../src/dateStorage.js';

describe('DateStorage', () => {

  test('should correctly create a date object with month, day, and year', () => {
    const input = new DateStorage("August", 31, 1976)
    expect(input.month).toEqual("August");
    expect(input.day).toEqual(31);
    expect(input.year).toEqual(1976);
  });
  
  test('should correctly determine starting day of the year and whether or not it was a leap year', () => {
    const input = new DateStorage("August", 31, 1976)
    expect(input.weekday()).toEqual([1, 4])
  });
});