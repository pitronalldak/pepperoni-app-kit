import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import loggerMiddleware from './middleware/loggerMiddleware';
import testReducer from './test';

const store = createStore(
    testReducer,
    applyMiddleware(thunk, promiseMiddleware, loggerMiddleware)
);

export default store;
