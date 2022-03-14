import { combineReducers } from 'redux';
import { LOGIN_USER } from '../actionCreators/types';

const user = (state = {} , action) => {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload
        default:
            return state
    }
};

export default combineReducers({
    user: user
});