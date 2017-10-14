// import dateService from '.././dates/dateService';

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
}
const validation = new Validation();
export default validation;