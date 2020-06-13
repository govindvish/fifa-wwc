import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.group, action) {
    switch (action.type) {
        case types.GROUP_LIST_SUCCESS:
            return Object.assign({}, state, {
                groupList: action.payload.groupList
            })
        case types.CLEAR_STORE:
            return Object.assign({}, state, {
                ...initialState.group
            })
        default:
            return state;
    }
}