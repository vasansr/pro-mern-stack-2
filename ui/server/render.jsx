import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Page from '../src/Page.jsx';
import template from './template.js';

function render(req, res) {
  const element = (
    <StaticRouter location={req.url} context={{}}>
      <Page />
    </StaticRouter>
  );
  const body = ReactDOMServer.renderToString(element);
  res.send(template(body));
}

export default render;
