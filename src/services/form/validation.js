// import dateService from '.././dates/dateService';
import timeService from '.././times/timeService';

class Validation {
  // constructor() {

  // }
  checkDate = (year, month, day) => {
    const errArray = [];
    // const errObject = {field: '', message: ''};

    /*********basic, cummulative************/
    //Make this date range dynamic rather than static
    if (year < 2017 || year > 2022) errArray.push({
      field: 'year', message: 'Please enter a year between 2017 and 2022'
    });
    if (month < 1 || month > 12) errArray.push({
      field: 'month', message: 'Please enter a month between 1 and 12'
    });
    if (day < 1 || day > 31) errArray.push({
      field: 'day', message: `${day} is not a valid date`
    });
    return errArray;
  }
  checkTime = (start, end) => {
    const errArray = [];
    const [startHours, startMinutes] = start.split(':').map(time => parseInt(time, 10));
    const [endHours, endMinutes] = end.split(':').map(time => parseInt(time, 10));
    if (this.validFormat(start) === false) errArray.push({
      field: 'start', message: 'The start time must be in the format 00:00 or 0:00'
    })
    if (this.validFormat(end) === false) errArray.push({
      field: 'end', message: 'The end time must be in the format 00:00 or 0:00'
    })
    else if (startHours < 0 || startHours > 23) errArray.push({
      field: 'start', message: 'The hours section of the start time must be a number between 0 and 23'
    });
    else if (startMinutes < 0 || startMinutes > 60) errArray.push({
      field: 'start', message: 'The minutes section of the start time must be a number between 0 and 60'
    });
    else if (endHours < 0 || endHours > 23) errArray.push({
      field: 'end', message: 'The hours section of the end time must be a number between 0 and 23'
    });
    else if (endMinutes < 0 || endMinutes > 60) errArray.push({
      field: 'end', message: 'The minutes section of the end time must be a number between 0 and 60'
    });
    else if (timeService.compareTimes(start, end) === 1) errArray.push({
      field: 'start', message: 'The start time must be before the end time'
    })

    return errArray;
  }
  validFormat = (timestamp) => {
    const [hours, minutes] = timestamp.split(':');
    // console.log('hours and minutes in timeService.validFormat', hours, minutes)
    // console.log(hours !== undefined
    //   , minutes !== undefined
    //   , hours.length > 0
    //   , hours.length < 3
    //   , minutes.length > 0
    //   , minutes.length < 3
    //   , hours.split('').every(val => parseInt(val, 10))
    //   , minutes.split('').every(val => parseInt(val, 10))
    //   , hours.indexOf('e') === -1 
    //   , minutes.indexOf('e') === -1)
    return hours !== undefined
      && minutes !== undefined
      && hours.length > 0
      && hours.length < 3
      && minutes.length > 0
      && minutes.length < 3
      // && parseInt(hours, 10)
      // && parseInt(minutes, 10)
      && hours.split('').every(val => val === '0' || parseInt(val, 10))
      && minutes.split('').every(val => val === '0' || parseInt(val, 10))
      && hours.indexOf('e') === -1 //parseInt won't catch an 'e', because it allows scientific notation
      && minutes.indexOf('e') === -1
  }
}
const validation = new Validation();
export default validation;