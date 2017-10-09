import { combineReducers } from 'redux';
import test_scene from './scenes/Test_Scene/reducer.js';
import layout from './scenes/Layout/reducer.js';
import UI from './data/reducer'

const rootReducer = combineReducers({ layout, test_scene, UI });
export default rootReducer;