export default function DateStorage(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
};

DateStorage.prototype.weekday = function(input) {
  let yearStart = 0
  let leapYear = 0
  let cycle = (this.year - 12 ) % 28
  /* istanbul ignore else */
  if (cycle % 4 === 0) {
    leapYear = 1
    if (cycle === 12) {
      yearStart = 0
    } else if (cycle === 24) {
      yearStart = 1
    } else if (cycle === 8) {
      yearStart = 2
    } else if (cycle === 20) {
      yearStart = 3
    } else if (cycle === 4) {
      yearStart = 4
    } else if (cycle === 16) {
      yearStart = 5
    } else if (cycle === 0) {
      yearStart = 6
    }
    let arr = [leapYear, yearStart]
    return arr
  } else {
    if (cycle === 6 || cycle === 17 || cycle === 23) {
      yearStart = 0
    } else if(cycle === 1 || cycle === 7 || cycle === 18) {
      yearStart = 1
    } else if(cycle === 2 || cycle === 13 || cycle === 19) {
      yearStart = 2
    } else if(cycle === 3 || cycle === 14 || cycle === 25) {
      yearStart = 3
    } else if(cycle === 9 || cycle === 15 || cycle === 26) {
      yearStart = 4
    } else if(cycle === 10 || cycle === 21 || cycle === 27) {
      yearStart = 5
    } else if(cycle === 5 || cycle === 11 || cycle === 22) {
      yearStart = 6
    }
    let arr = [leapYear, yearStart]
    return arr
  }
}