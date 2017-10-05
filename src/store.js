import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducer';

const enhancers = compose(
  applyMiddleware(reduxImmutableStateInvariant()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, enhancers);

export default store;
