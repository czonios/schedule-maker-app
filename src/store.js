import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducer';
import { loadState, saveState } from './services/localStorage/lsRedux';

// If there is data saved under 'events' in localStorage, use it 
// in initialising the redux store 
const lsSavedEvents = loadState('events');
let defaultState = {};
if (lsSavedEvents) {
  defaultState = {
    layout: {
      representation: {
        data: {
          events: lsSavedEvents
        }
      }
    }
  }
}

const enhancers = compose(
  applyMiddleware(reduxImmutableStateInvariant()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// Save the events to localStorage on any state change
store.subscribe(() => {
  saveState(store.getState().layout.representation.data.events);
})

export default store;
