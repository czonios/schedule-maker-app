// import dateService from '../../../../services/dates/dateService';
import {
  INCREMENT_DISPLAY_MONTH,
  DECREMENT_DISPLAY_MONTH
} from './actions';

const defaultState = {
  displayMonth: 9,
  displayYear: 2017
}

export default function data(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_DISPLAY_MONTH:
      const overflow = state.displayMonth + 1 > 11
      return {
        ...state,
        displayMonth: overflow ? 0 : state.displayMonth + 1,
        displayYear: overflow ? state.displayYear + 1 : state.displayYear
      }
    case DECREMENT_DISPLAY_MONTH:
      const underflow = state.displayMonth - 1 < 0
      return {
        ...state,
        displayMonth: underflow ? 11 : state.displayMonth - 1,
        displayYear: underflow ? state.displayYear - 1 : state.displayYear
      }
    default:
      return state;
  }
}