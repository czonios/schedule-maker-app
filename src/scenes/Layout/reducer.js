import { combineReducers } from 'redux';
import representation from './Representation/reducer.js';

const layout = combineReducers({ representation });
export default layout;