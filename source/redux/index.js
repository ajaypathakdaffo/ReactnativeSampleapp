import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import {incrementCounter} from './reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(incrementCounter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
