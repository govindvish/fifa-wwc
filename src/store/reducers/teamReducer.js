import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.team, action) {
    switch (action.type) {
        case types.TEAM_LIST_SUCCESS:
            return Object.assign({}, state, {
                teamList: action.payload.teamList
            })
        case types.CLEAR_STORE:
            return Object.assign({}, state, {
                ...initialState.team
            })
        default:
            return state;
    }
}