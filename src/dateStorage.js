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
      this.start.push(leapYear, yearStart)
      return this.start
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
      this.start.push(leapYear, yearStart)
      return this.start
    }
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
    if (firstDayOfMonth > 6) {
      firstDayOfMonth -= 7
    }
    return firstDayOfMonth
  }
}