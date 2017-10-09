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
  });
});

test('getNextMonth increments the year when called with december', () => {
  expect(dateService.getNextMonth(2017, 11)).toEqual({
    year: 2018,
    month: 0,
    monthNameShort: 'Jan',
    monthNameLong: 'January'
  });
});

test('getPrevMonth return an object representing the next month', () => {
  expect(dateService.getPrevMonth(2017, 9)).toEqual({
    year: 2017,
    month: 8,
    monthNameShort: 'Sep',
    monthNameLong: 'September'
  });
});

test('getPrevMonth decrements the year when called with january', () => {
  expect(dateService.getPrevMonth(2017, 0)).toEqual({
    year: 2016,
    month: 11,
    monthNameShort: 'Dec',
    monthNameLong: 'December'
  });
});

test('getNextDay returns an object representing the next day', () => {
  expect(dateService.getNextDay(2017, 9, 7)).toEqual({
    year: 2017,
    month: 9,
    day: 8,
    monthNameShort: 'Oct',
    monthNameLong: 'October'
  })
})
test('getNextDay rolls over the month and day when given the last day in a month', () => {
  expect(dateService.getNextDay(2017, 8, 30)).toEqual({
    year: 2017,
    month: 9,
    day: 1,
    monthNameShort: 'Oct',
    monthNameLong: 'October'
  })
})
test('getNextDay rolls over the year, month and day when given dec. 31st', () => {
  expect(dateService.getNextDay(2017, 11, 31)).toEqual({
    year: 2018,
    month: 0,
    day: 1,
    monthNameShort: 'Jan',
    monthNameLong: 'January'
  })
})
test('getPrevDay returns an object representing the prev day', () => {
  expect(dateService.getPrevDay(2017, 9, 7)).toEqual({
    year: 2017,
    month: 9,
    day: 6,
    monthNameShort: 'Oct',
    monthNameLong: 'October'
  })
})
test('getPrevDay rolls back the month and day when given the first day in a month', () => {
  expect(dateService.getPrevDay(2017, 8, 1)).toEqual({
    year: 2017,
    month: 7,
    day: 31,
    monthNameShort: 'Aug',
    monthNameLong: 'August'
  })
})
test('getPrevDay rolls back the year, month and day when given Jan 1st', () => {
  expect(dateService.getPrevDay(2017, 0, 1)).toEqual({
    year: 2016,
    month: 11,
    day: 31,
    monthNameShort: 'Dec',
    monthNameLong: 'December'
  })
})

test('getDateOneWeekBeforeToday returns an object representing the day one week before the given day', () => {
  expect(dateService.getDateOneWeekBeforeDay(2017, 9, 10)).toEqual({
    year: 2017,
    month: 9,
    day: 3,
    monthNameShort: 'Oct',
    monthNameLong: 'October'
  })
})
test('getDateOneWeekBeforeToday rolls back the month and day when the given day is <= 7', () => {
  expect(dateService.getDateOneWeekBeforeDay(2017, 9, 7)).toEqual({
    year: 2017,
    month: 8,
    day: 30,
    monthNameShort: 'Sep',
    monthNameLong: 'September'
  });
  expect(dateService.getDateOneWeekBeforeDay(2017, 9, 1)).toEqual({
    year: 2017,
    month: 8,
    day: 24,
    monthNameShort: 'Sep',
    monthNameLong: 'September'
  })
})
test('getDateOneWeekBeforeToday rolls back the year, month and day, when given a date in the first week of Jan.', () => {
  expect(dateService.getDateOneWeekBeforeDay(2018, 0, 6)).toEqual({
    year: 2017,
    month: 11,
    day: 30,
    monthNameShort: 'Dec',
    monthNameLong: 'December'
  });
  expect(dateService.getDateOneWeekBeforeDay(2018, 0, 1)).toEqual({
    year: 2017,
    month: 11,
    day: 25,
    monthNameShort: 'Dec',
    monthNameLong: 'December'
  })
})
test('getDateOneWeekFromToday returns an object representing the day one week before the given day', () => {
  expect(dateService.getDateOneWeekFromDay(2017, 9, 10)).toEqual({
    year: 2017,
    month: 9,
    day: 17,
    monthNameShort: 'Oct',
    monthNameLong: 'October'
  })
})
test('getDateOneWeekFromToday rolls over the month and day when the given day is in the last week of the month', () => {
  expect(dateService.getDateOneWeekFromDay(2017, 9, 31)).toEqual({
    year: 2017,
    month: 10,
    day: 7,
    monthNameShort: 'Nov',
    monthNameLong: 'November'
  });
  expect(dateService.getDateOneWeekFromDay(2017, 9, 27)).toEqual({
    year: 2017,
    month: 10,
    day: 3,
    monthNameShort: 'Nov',
    monthNameLong: 'November'
  })
})
test('getDateOneWeekFromToday rolls back the year, month and day, when given a date in the last week of Dec.', () => {
  expect(dateService.getDateOneWeekFromDay(2017, 11, 31)).toEqual({
    year: 2018,
    month: 0,
    day: 7,
    monthNameShort: 'Jan',
    monthNameLong: 'January'
  });
  expect(dateService.getDateOneWeekFromDay(2017, 11, 26)).toEqual({
    year: 2018,
    month: 0,
    day: 2,
    monthNameShort: 'Jan',
    monthNameLong: 'January'
  })
})
test('getMonthStr returns the short name of the month when given its number', () => {
  expect(dateService.getMonthStr(0)).toEqual("Jan");
});

test('getMonthStr returns undefined if it gets negative parameter', () => {
  expect(dateService.getMonthStr(-1)).toEqual(undefined);
});

test('getMonthStr returns undefined if it gets undefined parameter', () => {
  expect(dateService.getMonthStr(undefined)).toEqual(undefined);
});

test('getMonthStr returns undefined if it gets parameter > 11 (>December)', () => {
  expect(dateService.getMonthStr(12)).toEqual(undefined);
});

test('getDayStr returns the short name of the day when given its number', () => {
  expect(dateService.getDayStr(0)).toEqual("Mon");
});

test('getDayStr returns undefined if it gets negative parameter', () => {
  expect(dateService.getDayStr(-1)).toEqual(undefined);
});

test('getDayStr returns undefined if it gets undefined parameter', () => {
  expect(dateService.getDayStr(undefined)).toEqual(undefined);
});

test('getDayStr returns undefined if it gets parameter > 6 (0-6 days)', () => {
  expect(dateService.getDayStr(7)).toEqual(undefined);
});

test('getDayStr returns the short name of the day when given its number', () => {
  expect(dateService.getDayStr((new Date(2017, 9, 1).getDay()))).toEqual("Mon");
});

test('getDayStr returns undefined if it gets parameter > 6 (0-6 days)', () => {
  expect(dateService.getDayStr(7)).toEqual(undefined);
});

test('dateOfFirstMondayInMonth returns the date (number) of the first mon in month for given year and month', () => {
  expect(
    [[2015, 0], [2016, 3], [2017, 6], [2018, 7], [2019, 11], [2020, 8]]
      .map(date => dateService.dateOfFirstMondayInMonth(date[0], date[1]))
  ).toEqual([5, 4, 3, 6, 2, 7])
});

test('datesOfAllMondaysInMonth returns an array with the dates (numbers) of all the mondays for the given year and month', () => {
  expect(
    [[2017, 0], [2017, 6], [2017, 5]]
      .map(date => dateService.datesOfAllMondaysInMonth(date[0], date[1]))
  ).toEqual([
    [2, 9, 16, 23, 30],
    [3, 10, 17, 24, 31],
    [5, 12, 19, 26]
  ])
});
