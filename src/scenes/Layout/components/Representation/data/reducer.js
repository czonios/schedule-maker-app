// import * as m from '../../../../../services/mock/events/mockEvents';
import mockEvents3 from '../../../../../services/mock/events/generatedMockEvents3.js';
import {
  SUBMIT_EDITED_EVENT
} from '../../../../.././data/actions';

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
const byId = mockEvents3.reduce((accum, event) => {
  accum[event.id] = event;
  return accum;
}, {});
const allIds = mockEvents3.map(event => event.id);
const defaultState = {
  events: {
    byId,
    allIds
  }
}

export default function data(state = defaultState, action) {
  switch (action.type) {
    case SUBMIT_EDITED_EVENT:
      const { id, title, description, date, time } = action.payload;
      console.log(action);
      console.dir(state);
      return {
        events: {
          ...state.events,
          byId: {
            ...state.events.byId,
            [id]: {
              ...state.events.byId[id],
              title,
              description,
              date,
              time
            }
          }
        }
      }
    default:
      return state;
  }
}