import {
  TOGGLE_GRID_OR_CARD_DISPLAY
} from './actions';

const initState = {
  dayOfWeekAs0: 'monday',
  gridOrCardDisplay: 'grid'
};

const UI = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_GRID_OR_CARD_DISPLAY:
      return {
        ...state,
        gridOrCardDisplay: state.gridOrCardDisplay === 'grid' ? 'card' : 'grid'
      }
    default:
      return state;
  }
};

export default UI;
