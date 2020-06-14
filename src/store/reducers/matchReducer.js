import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.matches, action) {
    switch(action.type) {
        case types.MATCH_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                matchDetails: action.payload.matchDetails
            })
        case types.CLEAR_STORE:
            return Object.assign({}, state, {
                ...initialState.matches
            })
        default:
            return state;
    }
}