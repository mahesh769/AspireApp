import { actionTypes } from '../services/actionTypes';

export function getQuickCategoriesAction(action) {
    return {
        type: actionTypes.HOME_METHOD,
        payload: action,
        apiType: "GET"
    }
}

export function clearGetQuickCategoriesAction() {
    return {
        type: actionTypes.QUICK_CAT_CLEAR,
    }
}

/////////////////////////////////