import api from '../api';
import { LOGIN_USER, LOGIN_USER_ERROR } from './types';

export const login = (data) => async dispatch => {
    const response = await api.post(`/user/login`, data);

    if(response.error) {
        dispatch({ type: LOGIN_USER_ERROR, payload: response.message });
    } else {
        dispatch({ type: LOGIN_USER, payload: response.data.data});
    }
    
}