// import dateService from '../../../../services/dates/dateService';
import {
  INCREMENT_DISPLAY_MONTH,
  DECREMENT_DISPLAY_MONTH
} from './actions';

const defaultState = {
  displayMonth: 0,
  displayYear: 2017
}

export default function data(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_DISPLAY_MONTH:
      return {
        ...state,
        displayMonth: state.displayMonth + 1
      }
    case DECREMENT_DISPLAY_MONTH:
      return {
        ...state,
        displayMonth: state.displayMonth - 1
      }
    default:
      return state;
  }
}