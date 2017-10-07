import dateService from './dateService.js';

test('the date service has todays correct year', () => {
  expect(dateService.today.getFullYear()).toBe(new Date().getFullYear())
});

test('the date service has todays correct month', () => {
  expect(dateService.today.getMonth()).toBe(new Date().getMonth())
});

test('the date service has todays correct day', () => {
  expect(dateService.today.getDay()).toBe(new Date().getDay())
});

test('the date service has the names of the days of the week', () => {
  expect(dateService.dayStrRepArr).toEqual(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
});

test('getDaysCountInMonth returns the number of days for a given month and year', () => {
  expect(dateService.getDaysCountInMonth(2016, 11)).toBe(31),
    expect(dateService.getDaysCountInMonth(2017, 10)).toBe(30)
});

test('getDaysCountInMonth gets the number of days in the current month when called with no arguments', () => {
  const today = new Date();
  expect(dateService.getDaysCountInMonth()).toBe(new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate())
});

test('getDaysInMonth returns an array whose length is the number of days in a month', () => {
  expect(dateService.getDaysInMonth(2016, 1).length).toBe(29);
  const today = new Date();
  expect(dateService.getDaysInMonth().length).toBe(new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate());
});

test('getDaysInMonth returns an array whose elements represent the day of the week, from 0-6', () => {
  // Mon = 0, Tue = 1, ..., Sun = 6
  expect(dateService.getDaysInMonth(2017, 8)).toEqual(
    [4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5]
  );

  const today = new Date();
  expect(dateService.getDaysInMonth()).toEqual(
    Array.from({ length: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() }, (_, i) => {
      return new Date(today.getFullYear(), today.getMonth(), i).getDay();
    })
  );
});

test('getNamedDaysInMonth returns an array with the short names of each day for a given month', () => {
  expect(dateService.getNamedDaysInMonth(2017, 8)).toEqual(
    ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
      "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed",
      "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  );

  const today = new Date();
  const strReps = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  expect(dateService.getNamedDaysInMonth()).toEqual(
    Array.from({ length: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() }, (_, i) => {
      return new Date(today.getFullYear(), today.getMonth(), i + 1).getDay();
    })
      .map(dayNum => strReps[dayNum])
  );
});

test('getNextMonth return an object representing the next month', () => {
  expect(dateService.getNextMonth(2017, 9)).toEqual({
    year: 2017,
    month: 10,
    monthNameShort: 'Nov',
    monthNameLong: 'November'
  })
});
test('getNextMonth increments the year when called with december', () => {
  expect(dateService.getNextMonth(2017, 11)).toEqual({
    year: 2018,
    month: 0,
    monthNameShort: 'Jan',
    monthNameLong: 'January'
  })
})
test('getPrevMonth return an object representing the next month', () => {
  expect(dateService.getPrevMonth(2017, 9)).toEqual({
    year: 2017,
    month: 8,
    monthNameShort: 'Sep',
    monthNameLong: 'September'
  })
});
test('getPrevMonth decrements the year when called with january', () => {
  expect(dateService.getPrevMonth(2017, 0)).toEqual({
    year: 2016,
    month: 11,
    monthNameShort: 'Dec',
    monthNameLong: 'December'
  })
})