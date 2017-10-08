import timeService from './timeService';
import * as e from '.././mock/events/mockEvents';

test('sortTimesMutable sorts a list of times from low to high', () => {
  expect(timeService.sortTimesMutable(['12:43:12', '21:43:12', '03:23:00', '00:01:00', '12:43:13'])).toEqual(
    ["00:01:00", "03:23:00", "12:43:12", "12:43:13", "21:43:12"]
  );
});

test('sortEventsByTimeMutable sorts an array of events by their start time, low to high', () => {
  expect(timeService.sortEventsByTimeMutable([e.mockEvent3, e.mockEvent2])).toEqual(
    [e.mockEvent2, e.mockEvent3]
  );
});