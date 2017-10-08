import { combineReducers } from 'redux';
import representation from './components/Representation/reducer.js';

const layout = combineReducers({ representation });
export default layout;