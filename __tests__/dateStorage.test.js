import DateStorage from '../src/dateStorage.js';

describe('DateStorage', () => {
  // let input;
  
    // beforeEach(() => {
    //   input = new DateStorage(8, 31, 2022)
    // });

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

  test('should return day of week based on month, day, year', () => {
    let input = new DateStorage(8, 31, 2022, [0,6])
    expect(input.findMonth()).toEqual(1)

  });
});