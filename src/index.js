import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import {createHashHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './redux/reducers'
import sagas from './redux/sagas'


// middlewared
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers(), compose(applyMiddleware(...middlewares)));


sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
