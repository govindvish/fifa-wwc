import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.list, action) {
    switch (action.type) {
        case types.GET_ITEMS:
            return {
                ...state
            }

        default:
            return state;
    }
}