import { put } from 'redux-saga/effects';
import { Images } from '../../utility/imageRes';
import { actionTypes } from '../services/actionTypes';
import callApis from '../services/apiCall';
import { API_PROMOTIONS_LIVE, API_QUICK_CATEGORY } from '../services/apiTypes';

export function* getHomeAction() {


    let response = {
        available_bal: "3000", card_holdername: "Mark Henary", card_number: "5647   3411   2413   2020", expairty_date: "12/20", cvv: 456, debit_card_limit: "5000", spent_limit: "345"
        , history: [
            { title: "Top-up Account", subtitle: "Deposit mony to your account to use with card", isToggele: false },
            { title: "Weekly spending limit ", subtitle: "Your weekly spending limit S$ 5,000", isToggele: true, source: Images.IMG_TOGGLE_ON },
            { title: "Freez card ", subtitle: "Your debit card is currently active", isToggele: true, source: Images.IMG_TOGGLE_OFF },
            { title: "Get a new card ", subtitle: "This deactives your current debit card", isToggele: false },
            { title: "Deactivated cards", subtitle: "Your previously deactivated cards", isToggele: false },
            { title: "Get a new card ", subtitle: "This deactives your current debit card", isToggele: false },

        ]
    };

    try {
        const data = response
        yield put({ type: actionTypes.HOME_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: actionTypes.HOME_FAILURE, error: error })
    }
}