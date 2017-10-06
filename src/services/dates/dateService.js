class DateService {
  constructor() {
    this.today = new Date();
    this.dayStrRepArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }
  getDaysCountInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    //CF https://stackoverflow.com/a/1184359
    return new Date(year, month + 1, 0).getDate();
  }
  getDaysInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    return Array.from({ length: this.getDaysCountInMonth(year, month) }, (_, i) => {
      return new Date(year, month, i + 1).getDay();
    })
  }
  getNamedDaysInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    return this.getDaysInMonth(year, month).map(dayNumber => this.dayStrRepArr[dayNumber]);
  }
  //Return a 5 x 7 array of the days of the month, with nulls as padding. For use
  //on the Month view representation
  //TODO: unit testing for this method
  // getFormatedWeekChunks(year = this.today.getFullYear(), month = this.today.getMonth()) {
  //   const dayArr = this.getDaysInMonth(year, month);
  //   const initialPadding = Array.from({ length: dayArr[0] - 1 }, (_) => {
  //     return null;
  // });
  // console.log(initialPadding);
  // }
}

const dateService = new DateService();
// console.log(dateService.today)
export default dateService;

// console.log(dateService.getDaysCountInMonth());
// console.log(dateService.getDaysInMonth());
// console.log(dateService.getNamedDaysInMonth());