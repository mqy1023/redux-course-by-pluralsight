import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);