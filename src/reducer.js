import { combineReducers } from 'redux';
import test_scene from './scenes/Test_Scene/reducer.js';
import layout from './scenes/Layout/reducer.js';


const rootReducer = combineReducers({ layout, test_scene });
export default rootReducer;