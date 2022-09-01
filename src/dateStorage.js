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

const finalDay = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

const newMonthObject = {
  1:0,
  2:3,
  3:3,
  4:6,
  5:1,
  6:4,
  7:6,
  8:2,
  9:5,
  10:0,
  11:3,
  12:5
};

export default class DateStorage {
  constructor(month, day, year, janStart, monStart, dayStart) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.start = janStart;
    this.monStart = monStart;
    this.dayStart = dayStart;
  }

  findYear() {
    let cycle = 0;
    if (this.year <= 12) {
      cycle = this.year;
    } else {
      cycle = (this.year - 12 ) % 28;
    }
    this.start = yearCycles[cycle];
    return yearCycles[cycle];
  }

  findMonth() {
    let monthStart = newMonthObject[this.month];
    if (this.start[0] === 1 && this.month > 2) { 
      monthStart += 1;
    }
    let firstDayOfMonth = monthStart + this.start[1];
    if (firstDayOfMonth > 6) { 
      firstDayOfMonth -= 7;
    }
    this.monStart = firstDayOfMonth;
    return firstDayOfMonth;
  }

  findDay() {
    let num = parseInt(this.day);
    num += this.monStart;
    num -= 1;
    while (num > 6) {
      num -= 7;
    }
    this.dayStart = finalDay[num];
    return finalDay[num];
  }
}