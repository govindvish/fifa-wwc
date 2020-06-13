import * as types from './constants/actionTypes';
import axios from 'axios';

export const groupList = () => {
    return (dispatch) => {
        dispatch(groupListInitiated());
        return axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/teams/group_results`
        })
            .then(res => {
                dispatch(groupListSuccess(res.data));
            })
            .catch(err => {
                dispatch(groupListFailure());
            })
    }
};

export const groupListInitiated = () => ({
    type: types.GROUP_LIST_INITIATED
});

export const groupListSuccess = (groupList) => ({
    type: types.GROUP_LIST_SUCCESS,
    payload: {
        groupList
    }
});

export const groupListFailure = () => ({
    type: types.GROUP_LIST_FAILURE
});

export const clearStore = () => ({
    type: types.CLEAR_STORE
});