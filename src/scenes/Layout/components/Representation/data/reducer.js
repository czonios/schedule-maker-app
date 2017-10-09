// import * as m from '../../../../../services/mock/events/mockEvents';
import mockEvents3 from '../../../../../services/mock/events/generatedMockEvents3.js';

// const defaultState = {
//   events: {
//     mockEvent1: m.mockEvent1,
//     mockEvent2: m.mockEvent2,
//     mockEvent3: m.mockEvent3,
//     mockEvent4: m.mockEvent4,
//     mockEvent5: m.mockEvent5,
//     mockEvent6: m.mockEvent6,
//     mockEvent7: m.mockEvent7
//   }
// }
const defaultState = {
  events: mockEvents3
}

export default function data(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}