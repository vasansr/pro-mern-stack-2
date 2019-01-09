import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from '../src/Page.jsx';

const element = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.hydrate(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}
