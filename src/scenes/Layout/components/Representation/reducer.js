import { combineReducers } from 'redux';
import data from './data/reducer.js';

const representation = combineReducers({ data });
export default representation;
