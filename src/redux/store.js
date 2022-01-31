import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    // middlewares.push(logger);
}

function configureStore() {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(...middlewares))
    )
    sagaMiddleware.run(rootSaga);
    return store;
}

const store = configureStore()

export default store;