import {
  TOGGLE_GRID_OR_CARD_DISPLAY,
  DISPLAY_EVENT_MODAL,
  DISMISS_EVENT_MODAL
} from './actions';

const initState = {
  dayOfWeekAs0: 'monday',
  gridOrCardDisplay: 'card',
  eventModal: false
};

const UI = (state = initState, action) => {
  console.log('action.payload at top of UI reducer', action.payload)
  switch (action.type) {
    case TOGGLE_GRID_OR_CARD_DISPLAY:
      return {
        ...state,
        gridOrCardDisplay: state.gridOrCardDisplay === 'grid' ? 'card' : 'grid'
      }
    case DISPLAY_EVENT_MODAL:
      return {
        ...state,
        eventModal: true
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
