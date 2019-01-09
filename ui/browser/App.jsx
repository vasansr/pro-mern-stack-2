import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from '../src/Page.jsx';
import store from '../src/store.js';

/* eslint-disable no-underscore-dangle */
store.initialData = window.__INITIAL_DATA__;
store.userData = window.__USER_DATA__;

const element = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.hydrate(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}
