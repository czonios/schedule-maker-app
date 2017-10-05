import {
  INCREMENT,
  DECREMENT
} from './actions';

export default function test_store_slice(state = { 'count': 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}