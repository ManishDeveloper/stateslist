import {ADD_STATE,REMOVE_STATE} from './types';

export const addState = (country,state) => async dispatch => {

    dispatch({
        type:ADD_STATE,
        payload:{country,state}
    });
}

export const removeState = (country,state) => async dispatch => {

    dispatch({
        type:REMOVE_STATE,
        payload:{country,state}
    });
}