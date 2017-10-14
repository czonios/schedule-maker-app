class TimeService {
  // constructor() {

  // }
  //returns -1 is a is less than b, 1 if a is greater than b, 0 if they are equal
  //conforms to what .sort() expects from its callback, 
  //cf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  compareTimes(timeA, timeB) {
    const [hoursA, minutesA] = timeA.split(':').map(str => parseInt(str, 10));
    const [hoursB, minutesB] = timeB.split(':').map(str => parseInt(str, 10));
    // console.log(hoursA, minutesA, secondsA);
    if (hoursA < hoursB) return -1;
    else if (hoursA > hoursB) return 1;
    else if (minutesA < minutesB) return -1;
    else if (minutesA > minutesB) return 1;
    else return 0;
  }
  sortTimesMutable(timeArr) {
    return timeArr.sort(this.compareTimes);
  }
  sortEventsByTimeMutable(events) {
    return events.sort((a, b) => {
      return this.compareTimes(a.time.start, b.time.start);
    })
  }
  removeLeadingZero(timestamp) {
    let [hours, minutes] = timestamp.split(':');
    if (hours.length === 2
      && hours[0] === '0') hours = hours[1];
    return `${hours}:${minutes}`;
  }
}
const timeService = new TimeService();
export default timeService;