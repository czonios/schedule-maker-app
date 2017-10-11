import {
  TOGGLE_GRID_OR_CARD_DISPLAY,
  DISPLAY_EVENT_MODAL,
  DISMISS_EVENT_MODAL,
  SUBMIT_EDITED_EVENT
} from './actions';

const initState = {
  dayOfWeekAs0: 'monday',
  gridOrCardDisplay: 'card',
  eventModal: false
};

const UI = (state = initState, action) => {
  // console.log('action.payload at top of UI reducer', action.payload);
  const { payload } = action;
  switch (action.type) {
    case TOGGLE_GRID_OR_CARD_DISPLAY:
      return {
        ...state,
        gridOrCardDisplay: state.gridOrCardDisplay === 'grid' ? 'card' : 'grid'
      }
    case DISPLAY_EVENT_MODAL:
      // console.log(payload);
      return {
        ...state,
        eventModal: payload
      }
    case DISMISS_EVENT_MODAL:
      return {
        ...state,
        eventModal: false
      }
    default:
      return state;
  }
};

export default UI;
