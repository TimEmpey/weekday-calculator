const yearCycles = {
  27: [0, 5],
  26: [0, 4],
  25: [0, 3],
  24: [1, 1],
  23: [0, 0],
  22: [0, 6],
  21: [0, 5],
  20: [1, 3],
  19: [0, 2],
  18: [0, 1],
  17: [0, 0],
  16: [1, 5],
  15: [0, 4],
  14: [0, 3],
  13: [0, 2],
  12: [1, 0],
  11: [0, 6],
  10: [0, 5],
  9: [0, 4],
  8: [1, 2],
  7: [0, 1],
  6: [0, 0],
  5: [0, 6],
  4: [1, 4],
  3: [0, 3],
  2: [0, 2],
  1: [0, 1],
  0: [1, 6]
};

const days ={
  0:
  1:
  2:
}
export default class DateStorage {
  constructor(month, day, year, start) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.start = start
  }

  findYear() {
    let yearStart = 0
    let leapYear = 0
    let cycle = (this.year - 12 ) % 28
    return yearCycles[cycle]
  }

  findMonth() {
    let month = this.month
    let arr = this.start
    let monthStart = 0
    if (month === 1) {
      monthStart = 0
    } else if (month === 2) {
      monthStart = 3
    }
    if (this.start[0] === 1) { 
      if (month === 10) {
        monthStart = 1
      } else if (month === 5) {
        monthStart = 2
      } else if (month === 8) {
        monthStart = 3
      } else if (month === 3 || month === 11) {
        monthStart = 4
      } else if (month === 6) {
        monthStart = 5
      } else if (month === 9 || month === 12) {
        monthStart = 6
      } else if (month === 4 || month === 7) {
        monthStart = 0
      }
    } else {
      if (month === 10) {
        monthStart = 0
      } else if (month === 5) {
        monthStart = 1
      } else if (month === 8) {
        monthStart = 2
      } else if (month === 3 || month === 11) {
        monthStart = 3
      } else if (month === 6) {
        monthStart = 4
      } else if (month === 9 || month === 12) {
        monthStart = 5
      } else if (month === 4 || month === 7) {
        monthStart = 6
      }
    }
    let firstDayOfMonth = monthStart + arr[1]
/* istanbul ignore else */ 
    if (firstDayOfMonth > 6) {
      firstDayOfMonth -= 7
    }
    return firstDayOfMonth
  }
}