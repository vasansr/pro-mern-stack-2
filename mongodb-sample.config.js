const localConfig = {
  protocol: 'mongodb',
  host: 'localhost',
  db: 'issuetracker',
}

const atlasConfig = {
  protocol: 'mongodb+srv',
  host: 'cluster0-abcd.mongodb.net',  // change this to your host
  db: 'issuetracker',
  query: 'retryWrites=true',
  user: 'atlasUser',                  // change this to your user
  password: 'atlasPassword',          // change this to your password
}

const mlabConfig = {
  protocol: 'mongodb',
  host: 'ds111111.mlab.com:33533',    // change this to your host
  db: 'issuetracker',
  user: 'atlasUser',                  // change this to your user
  password: 'atlasPassword',          // change this to your password
}

module.exports = localConfig;
