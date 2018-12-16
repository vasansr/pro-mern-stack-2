const React = require('react');
const ReactDOMServer = require('react-dom/server');

const About = require('./About.js').default;
const template = require('./template.js');

function render(req, res) {
  const body = ReactDOMServer.renderToString(
    React.createElement(About),
  );
  res.send(template(body));
}

module.exports = render;
