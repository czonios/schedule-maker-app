class DateService {

  constructor() {
    this.today = new Date();
    this.dayStrRepArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.monthNamesLong = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
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

  //getPrevMonth :: (Num, Num) -> {String: Num, String: Num, String: String, String: String}
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

}

const dateService = new DateService();
export default dateService;
