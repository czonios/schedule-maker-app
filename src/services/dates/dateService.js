class DateService {

  constructor() {
    this.today = new Date();
    this.dayStrRepArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.dayNamesLong = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.monthNamesLong = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    //temp implementation
    this.OClocks24 = Array.from({ length: 24 }, (_, i) => {
      // i++;
      const strRep = i / 10 < 1 ? `0${i}:00` : `${i}:00`;
      return strRep;
    })
  }

  // getDaysCountInMonth :: (Num, Num) -> Num
  getDaysCountInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    //CF https://stackoverflow.com/a/1184359
    return new Date(year, month + 1, 0).getDate();
  }

  // getDaysInMonth :: (Num, Num) -> [Num]
  getDaysInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    return Array.from({ length: this.getDaysCountInMonth(year, month) }, (_, i) => {
      return new Date(year, month, i).getDay();
    });
  }

  // getNamedDaysInMonth :: (Num, Num) -> [String]
  getNamedDaysInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    return this.getDaysInMonth(year, month).map(dayNumber => this.dayStrRepArr[dayNumber]);
  }

  //getNextMonth :: (Num, Num) -> {String: Num, String: Num, String: String, String: String}
  getNextMonth(year, month) {
    if (month < 11) {
      return {
        year,
        month: month + 1,
        monthNameShort: this.monthNamesShort[month + 1],
        monthNameLong: this.monthNamesLong[month + 1]
      }
    } else {
      return {
        year: year + 1,
        month: 0,
        monthNameShort: "Jan",
        monthNameLong: "January"
      }
    }
  }

  // getPrevMonth :: (Num, Num) -> {String: Num, String: Num, String: String, String: String}
  getPrevMonth(year, month) {
    if (month > 0) {
      return {
        year,
        month: month - 1,
        monthNameShort: this.monthNamesShort[month - 1],
        monthNameLong: this.monthNamesLong[month - 1]
      }
    } else {
      return {
        year: year - 1,
        month: 11,
        monthNameShort: "Dec",
        monthNameLong: "December"
      }
    }
  }
  getNextDay(year, month, day) {
    // const date = new Date(year, month, day);
    const lastDayInMonth = this.getDaysCountInMonth(year, month);
    let nextDaysYear = year;
    let nextDaysMonth = month;
    let nextDay = day;
    let nextDaysMonthNameShort = this.monthNamesShort[nextDaysMonth];
    let nextDaysMonthNameLong = this.monthNamesLong[nextDaysMonth];
    if (day === lastDayInMonth) {
      if (month === 11) {
        //December 31st
        nextDaysYear = year + 1;
        nextDaysMonth = 0;
        nextDay = 1;
        nextDaysMonthNameShort = this.monthNamesShort[nextDaysMonth];
        nextDaysMonthNameLong = this.monthNamesLong[nextDaysMonth];
      } else {
        //Last day of any other month
        nextDaysMonth = month + 1;
        nextDay = 1;
        nextDaysMonthNameShort = this.monthNamesShort[nextDaysMonth];
        nextDaysMonthNameLong = this.monthNamesLong[nextDaysMonth];
      }
    } else {
      //Any other day than the last day in the month
      nextDay = day + 1
    }
    return {
      year: nextDaysYear,
      month: nextDaysMonth,
      day: nextDay,
      monthNameShort: nextDaysMonthNameShort,
      monthNameLong: nextDaysMonthNameLong
    }
  }

  getPrevDay(year, month, day) {
    // const date = new Date(year, month, day);
    //What happens with lastDayOfPrevMonth when month === 0 ?
    const lastDayOfPrevMonth = this.getDaysCountInMonth(year, month - 1);
    let prevDaysYear = year;
    let prevDaysMonth = month;
    let prevDay = day;
    let prevDaysMonthNameShort = this.monthNamesShort[prevDaysMonth];
    let prevDaysMonthNameLong = this.monthNamesLong[prevDaysMonth];
    if (day === 1) {
      if (month === 0) {
        //January 1st
        prevDaysYear = year - 1;
        prevDaysMonth = 11;
        prevDay = lastDayOfPrevMonth;
        prevDaysMonthNameShort = this.monthNamesShort[prevDaysMonth];
        prevDaysMonthNameLong = this.monthNamesLong[prevDaysMonth];
      } else {
        //First day of any other month
        prevDaysMonth = month - 1;
        prevDay = lastDayOfPrevMonth;
        prevDaysMonthNameShort = this.monthNamesShort[prevDaysMonth];
        prevDaysMonthNameLong = this.monthNamesLong[prevDaysMonth];
      }
    } else {
      //Any other day than the first day in the month
      prevDay = day - 1
    }
    return {
      year: prevDaysYear,
      month: prevDaysMonth,
      day: prevDay,
      monthNameShort: prevDaysMonthNameShort,
      monthNameLong: prevDaysMonthNameLong
    }
  }

  // getMonthStr :: Num -> String
  getMonthStr(month) {
    return this.monthNamesShort[month];
  }

  //getDayStr :: Num -> String mon=0 convention
  getDayStr(day) {
    return this.dayStrRepArr[day];
  }
}

const dateService = new DateService();
export default dateService;
