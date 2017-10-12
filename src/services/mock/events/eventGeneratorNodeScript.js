const fs = require('fs');
const util = require('util');
// const writeFilePromisified = util.promisify(fs.writeFile);




/**
 * title: (String) title of the scheduled event
 * desciption: (String) a short description
 * start: (hh:mm) time of start
 * end: (hh:mm) time of end
 * repeated: (Boolean) true or false, whether the event is repeated
 * date: (Date) object for the date
 * notifyBool: (Boolean) true or false, true if notification set
 * notifyTimeBefore: (String) time of notification is start - notifyTimeBefore
 * repdays: (Boolean[] -> object) if repeated is true, days on which to repeat
 * color: (String) color of the grid cell or card
 * tags: (String[]) array of tags for filtering events, e.g. ["study","algorithms"]
 * notes: (object[]) notes for the particular event, array of object {id: id, text: "text"}
 */



class Event {

  constructor(id, title, description, start, end, repeated, date, notifyBool, notifyTimeBefore, repDays, color, tags, notes) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.time = {
      start: start,
      end: end
    };
    this.repeated = repeated;
    this.date = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      dayOfWeek: date.getDay()
    };
    this.notify = {
      enabled: notifyBool,
      time: this.time.start - notifyTimeBefore
    };
    this.repeatOnDay = {
      mon: repDays[0],
      tue: repDays[1],
      wed: repDays[2],
      thu: repDays[3],
      fri: repDays[4],
      sat: repDays[5],
      sun: repDays[6]
    };
    this.color = color;
    this.tags = tags; //array
    this.notes = notes; //array of objects {id: x, text: "y"}

  }

};
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
    let nextDayObj = new Date(year, month, day + 1)
    const nextDaysMonth = nextDayObj.getMonth();
    return {
      year: nextDayObj.getFullYear(),
      month: nextDaysMonth,
      day: nextDayObj.getDate(),
      monthNameShort: this.monthNamesShort[nextDaysMonth],
      monthNameLong: this.monthNamesLong[nextDaysMonth]
    }
  }

  getPrevDay(year, month, day) {
    let prevDayObj = new Date(year, month, day - 1)
    const prevDaysMonth = prevDayObj.getMonth();
    return {
      year: prevDayObj.getFullYear(),
      month: prevDaysMonth,
      day: prevDayObj.getDate(),
      monthNameShort: this.monthNamesShort[prevDaysMonth],
      monthNameLong: this.monthNamesLong[prevDaysMonth]
    }
  }
  getDateOneWeekBeforeDay(year, month, day) {
    const prevWeekObj = new Date(year, month, day - 7);
    const prevWeekMonth = prevWeekObj.getMonth();
    return {
      year: prevWeekObj.getFullYear(),
      month: prevWeekMonth,
      day: prevWeekObj.getDate(),
      monthNameShort: this.monthNamesShort[prevWeekMonth],
      monthNameLong: this.monthNamesLong[prevWeekMonth]
    }
  }
  getDateOneWeekFromDay(year, month, day) {
    const nextWeekObj = new Date(year, month, day + 7);
    const nextWeekMonth = nextWeekObj.getMonth();
    return {
      year: nextWeekObj.getFullYear(),
      month: nextWeekMonth,
      day: nextWeekObj.getDate(),
      monthNameShort: this.monthNamesShort[nextWeekMonth],
      monthNameLong: this.monthNamesLong[nextWeekMonth]
    };
  }
  // getMonthStr :: Num -> String
  getMonthStr(month) {
    return this.monthNamesShort[month];
  }

  //getDayStr :: Num -> String mon=0 convention
  getDayStr(day) {
    return this.dayStrRepArr[day];
  }

  //converts day to mon=0 from sun=0
  convertDay(dayPrev) {
    if (dayPrev === 0)
      dayPrev = 7;
    return dayPrev - 1;
  }

};

const dateService = new DateService();

const loremStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const loremSplitArr = loremStr.split(' ');


//*********************************   USE *********************************** */
//Navigate to this directory in the terminal and enter 'node eventGeneratorNodeScript.js'

// Make changes to the arguments to createMockEvents here to change the number of 
// mock events produced or to change the filename of the output
createMockEvents('generatedMockEvents3.js', 500);

// Make changes to the arguments provided to the Event constructor below in order change
// data for the mock events produced
// One exception, change the arguments to generateStartEnd to change 
// the min start or max end time for events (don't use 00 for the minutes segment
// of an end time for now, its bugged)
function generateMockEvents(count) {
  const mockEventArr = [];
  for (let i = 0; i < count; i++) {
    const timeGenerator = generateStartEnd('06:00:00', '20:59:00');
    mockEventArr.push(new Event(
      `event${i}`,
      generateTitle(1, 8),
      generateDescription(3, 25),
      timeGenerator.next().value,
      timeGenerator.next().value,
      false,
      generateDate({
        yearEarliest: 2017,
        yearLatest: 2017,
        monthEarliest: 0,
        monthLatest: 11,
        dayEarliest: 1,
        dayLatest: 31
      }),
      false,
      null,
      false,
      null,
      null,
      null
    ))
  }
  return mockEventArr;
}
function createMockEvents(filename, count) {
  const start = Date.now();
  const mockEvents = generateMockEvents(count);
  mockEventsStr = JSON.stringify(mockEvents);
  mockEventsStr = `const mockEvents = ${mockEventsStr}; export default mockEvents`;
  fs.writeFile(`./${filename}`, mockEventsStr, (error) => {
    if (error) {
      console.log(`There was an error while attempting to create mock events: ${error}`);
    } else {
      console.log(`
      ${count} mock events generated successfully and stored in src/services/mock/events/${filename} as a JSON string.
      Runtime: ${Date.now() - start} ms.
      `);
    }
  })
}
//CRA isnt using node 8+ so i cant use the promisified version... or something?
// const writeFilePromisified = fs.writeFile;
// function createMockEvents(filename, count) {
//   const start = Date.now();
//   const mockEvents = generateMockEvents(count);

//   writeFilePromisified(`./${filename}`, JSON.stringify(mockEvents))
//     .then(something => {
//       console.log(`
//       ${count} mock events generated successfully and stored in src/services/mock/events/${filename} as a JSON string.
//       Runtime: ${Date.now() - start} ms.
//       `);
//     })
//     .catch(error => {
//       console.log(`There was an error while attempting to create mock events: ${error}`);
//     })

// }





function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function generateTitle(minLength, maxLength) {
  return loremSplitArr
    .slice(0, randomIntBetween(minLength, maxLength))
    .join(' ');
}
function generateDescription(minLength, maxLength) {
  return loremSplitArr
    .slice(0, randomIntBetween(minLength, maxLength))
    .join(' ');
}
function* generateStartEnd(earliest, latest) {
  const [earliestHour, earliestMinute] = earliest.split(':').map(val => parseInt(val, 10));
  const [latestHour, latestMinute] = latest.split(':').map(val => parseInt(val, 10));

  const startHour = randomIntBetween(earliestHour, latestHour + 1);
  const startMinute = randomIntBetween(0, latestMinute - 1);
  let startStr = `${startHour}:${startMinute}:00`;
  //Add zeros in front of hour and min if necesary
  startStr = startStr
    .split(':')
    .map(time => time.length === 1 ? `0${time}` : time)
    .join(':')
  yield startStr;

  const endHour = randomIntBetween(startHour, latestHour + 1);
  const endMinute = randomIntBetween(startMinute, latestMinute);
  let endStr = `${endHour}:${endMinute}:00`
  endStr = endStr
    .split(':')
    .map(time => time.length === 1 ? `0${time}` : time)
    .join(':')
  yield endStr;
}
//TODO it has issues as written if the minutes of the latestTime are 00, eg '20:00:00'
//also, the minutes of the end time are always larger than the minutes of the start time, which doeesn't 
//necesarily need to be the case, if the end times hours > start time hours
// console.log(timeGenerator.next().value, timeGenerator.next().value);

function generateDate(earliestLatestDateObj) {
  const { yearEarliest, yearLatest, monthEarliest, monthLatest, dayEarliest, dayLatest } = earliestLatestDateObj;
  return new Date(
    randomIntBetween(yearEarliest, yearLatest + 1),
    randomIntBetween(monthEarliest, monthLatest + 1),
    randomIntBetween(dayEarliest, dayLatest + 1)
  )
}
// console.log(new Event());
// console.log(generateTitle(1, 8));
// console.log(loremSplitArr.length);
// console.log(generateDescription(1, 50));
// const it = generateStartEnd('02:43:00', '23:12:00');
// console.log(it.next(), it.next());
// console.log(generateStartEnd('02:43:00', '03:12:00').next(), generateStartEnd('02:43:00', '03:12:00').next());

// const mockEvents = generateMockEvents(5);

// console.log(mockEvents);