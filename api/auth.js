const Router = require('express');
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');

const routes = new Router();

routes.use(bodyParser.json());

routes.post('/signin', async (req, res) => {
  const googleToken = req.body.google_token;
  if (!googleToken) {
    res.status(400).send({ code: 400, message: 'Missing Token' });
    return;
  }

  const client = new OAuth2Client();
  let payload;
  try {
    const ticket = await client.verifyIdToken({ idToken: googleToken });
    payload = ticket.getPayload();
  } catch (error) {
    res.status(403).send('Invalid credentials');
  }

  const { given_name: givenName, name, email } = payload;
  const credentials = {
    signedIn: true, givenName, name, email,
  };
  res.json(credentials);
});

module.exports = { routes };
