import { combineReducers } from 'redux';
import { API_LOGOUT_METHOD } from '../services/apiTypes';


import homeReducer from './homeReducer';


const appReducer = combineReducers({

    homeReducer
});

const rootReducer = (state, action) => {
    if (action.type == API_LOGOUT_METHOD) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;