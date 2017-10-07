import * as m from '../../../../services/mock/events/mockEvents';

const defaultState = {
  events: {
    mockEvent1: m.mockEvent1,
    mockEvent2: m.mockEvent2,
    mockEvent3: m.mockEvent3
  }
}

export default function data(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}