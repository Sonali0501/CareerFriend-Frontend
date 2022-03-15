import api from '../api';
import { LOGIN_USER, LOGIN_USER_ERROR } from './types';

export const login = (data) => async dispatch => {
    const response = await api.post(`/user/login`, data);

    if(response.data.error) {
        dispatch({ type: LOGIN_USER_ERROR, payload: response.data });
    } else {
        dispatch({ type: LOGIN_USER, payload: response.data.data});
    }
    
}