const localConfig = {
  protocol: 'mongodb',
  host: 'localhost',
  dbName: 'issuetracker',
}

const atlasConfig = {
  protocol: 'mongodb+srv',
  host: 'cluster0-abcd.mongodb.net',  // change this to your host
  dbName: 'issuetracker',
  query: 'retryWrites=true',
  user: 'atlasUser',                  // change this to your user
  password: 'atlasPassword',          // change this to your password
}

const mlabConfig = {
  protocol: 'mongodb',
  host: 'ds111111.mlab.com:33533',    // change this to your host
  dbName: 'issuetracker',
  user: 'mlabUser',                   // change this to your user
  password: 'mLabPassword',           // change this to your password
}

module.exports = localConfig;         // change this based on service used
