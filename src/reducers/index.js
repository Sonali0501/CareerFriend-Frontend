import { combineReducers } from 'redux';
import { LOGIN_USER, LOGIN_USER_ERROR, SIGNUP_USER, SIGNUP_USER_ERROR, GET_PROFILE, GET_PROFILE_ERROR } from '../actionCreators/types';

const user = (state = {} , action) => {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload
        case LOGIN_USER_ERROR:
            return action.payload
        case SIGNUP_USER:
            return action.payload
        case SIGNUP_USER_ERROR:
            return action.payload
        default:
            return state
    }
};

const profile = (state = {}, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return action.payload
        case GET_PROFILE_ERROR:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    user: user,
    profile: profile
});