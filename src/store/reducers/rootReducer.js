import { combineReducers } from 'redux';
import teamReducer from './teamReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
    team: teamReducer,
    group: groupReducer
});

export default rootReducer;