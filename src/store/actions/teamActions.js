import * as types from './constants/actionTypes';
import axios from 'axios';

export const teamList = () => {
    return (dispatch) => {
        dispatch(teamListInitiated());
        return axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/teams/`
        })
            .then(res => {
                dispatch(teamListSuccess(res.data));
            })
            .catch(err => {
                dispatch(teamListFailure());
            })
    }
};

export const teamListInitiated = () => ({
    type: types.TEAM_LIST_INITIATED
});

export const teamListSuccess = (teamList) => ({
    type: types.TEAM_LIST_SUCCESS,
    payload: {
        teamList
    }
});

export const teamListFailure = () => ({
    type: types.TEAM_LIST_FAILURE
});

export const clearStore = () => ({
    type: types.CLEAR_STORE
});