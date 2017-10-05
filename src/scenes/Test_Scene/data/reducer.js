import { combineReducers } from 'redux';
import test_store_slice from './test_store_slice/reducer.js';

const data = combineReducers({ test_store_slice });
export default data;