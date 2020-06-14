import { combineReducers } from 'redux';
import teamReducer from './teamReducer';
import groupReducer from './groupReducer';
import matchReducer from './matchReducer';

const rootReducer = combineReducers({
    team: teamReducer,
    group: groupReducer,
    match: matchReducer
});

export default rootReducer;