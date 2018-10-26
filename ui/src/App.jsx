import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import IssueList from './IssueList.jsx';

const element = <IssueList />;

// Render the element in the contents div
ReactDOM.render(element, document.getElementById('contents'));
