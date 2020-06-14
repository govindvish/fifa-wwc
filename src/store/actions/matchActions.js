import * as types from './constants/actionTypes';
import axios from 'axios';

export const matchDetails = () => {
    return (dispatch) => {
        dispatch(matchDetailsInitiated());
        return axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/matches`
        })
            .then(res => {
                dispatch(matchDetailsSuccess(res.data));
            })
            .catch(err => {
                dispatch(matchDetailsFailure());
            })
    }
};

export const matchDetailsInitiated = () => ({
    type: types.MATCH_DETAILS_INITIATED
});

export const matchDetailsSuccess = (matchDetails) => ({
    type: types.MATCH_DETAILS_SUCCESS,
    payload: {
        matchDetails
    }
});

export const matchDetailsFailure = () => ({
    type: types.MATCH_DETAILS_FAILURE
});

export const clearStore = () => ({
    type: types.CLEAR_STORE
});