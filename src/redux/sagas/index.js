import { all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../services/actionTypes';
import { getHomeAction } from './homeSaga';


function* watchGetQuickCategoryAction() {
    yield takeLatest(actionTypes.HOME_METHOD, getHomeAction)
}


function* rootSaga() {
    yield all([
        watchGetQuickCategoryAction()
    ])
}

export default rootSaga;