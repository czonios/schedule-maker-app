// import * as m from '../../../../../services/mock/events/mockEvents';
import mockEvents3 from '../../../../../services/mock/events/generatedMockEvents3.js';
import {
  SUBMIT_EDITED_EVENT,
  DELETE_EVENT
} from '../../../../.././data/actions';

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
  const { payload } = action;
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
    case DELETE_EVENT:
      // console.log(payload)
      return {
        events: {
          allIds: state.events.allIds.filter(id => id !== payload),
          byId: Object.entries(state.events.byId).reduce((accum, entry) => {
            if (entry[1].id !== payload) {
              accum[entry[0]] = entry[1];
            }
            return accum;
          }, {})
        }
      }
    default:
      return state;
  }
}