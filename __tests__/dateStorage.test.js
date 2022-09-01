import DateStorage from '../src/dateStorage.js';

describe('DateStorage', () => {

  test('should correctly create a date object with month, day, and year', () => {
    let input = new DateStorage(8, 31, 2022, [])
    expect(input.month).toEqual(8);
    expect(input.day).toEqual(31);
    expect(input.year).toEqual(2022);
  });
  
  test('should correctly determine starting day of the year and whether or not it was a leap year', () => {
    let input = new DateStorage(8, 31, 2022, [])
    expect(input.findYear()).toEqual([0, 6])
  });

  test('should return day of week based on month, year', () => {
    let input = new DateStorage(8, 31, 2022, [0,6])
    expect(input.findMonth()).toEqual(1)
  });
  
  test('should return day of week based on month, year', () => {
    let input = new DateStorage(8, 20, 2024, [1,1])
    expect(input.findMonth()).toEqual(4)
  });

  test('should return day of week based on start day of month, day', () => {
    let input = new DateStorage(8, 31, 2022, [0, 6], 1)
    expect(input.findDay()).toEqual("Wednesday")
  });
});