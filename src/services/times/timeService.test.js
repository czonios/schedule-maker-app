import timeService from './timeService';

test('sortTimesMutable sorts a list of times from low to high', () => {
  expect(timeService.sortTimesMutable(['12:43:12', '21:43:12', '03:23:00', '00:01:00', '12:43:13'])).toEqual(
    ["00:01:00", "03:23:00", "12:43:12", "12:43:13", "21:43:12"]
  )
})