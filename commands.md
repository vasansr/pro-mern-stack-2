# Command-line commands

This is a list of all command-line commands used in the book. It includes
installation and other shell-based commands used to try out things or
run scripts manually.

## Chapter 2: Hello World

### Project Set Up

```
nvm install 10
nvm alias default 10
node --version
npm --version
npm install -g npm@6
npm init
npm install express
npm uninstall express
npm install express@4
```

### Express
```
node server.js
npm start
```

### JSX Transform
```
npm install --save-dev @babel/core@7 @babel/cli@7
node_modules/.bin/babel --version
npx babel --version
npm install --save-dev @babel/preset-react@7
npx babel src --presets @babel/react --out-dir public
```

### Older Browsers Support
```
npm install --no-save @babel/plugin-transform-arrow-functions@7
npx babel src --presets @babel/react --plugins=@babel/plugin-transform-arrow-functions --out-dir public
npm uninstall @babel/plugin-transform-arrow-functions@7
npm install --save-dev @babel/preset-env
npx babel src --out-dir public
```

### Automate
```
npm install nodemon@1
```

## Chapter 5: Express GraphQL APIs

### About API
```
npm install graphql@0 apollo-server-express@2
curl "http://localhost:3000/graphql?query=query+\{+about+\}"
```

## Chapter 6: MongoDB

### MongoDB Node.js Driver
```
npm install mongodb@3
mongo issuetracker --eval "db.employees.remove({})"
node scripts/trymongo.js
```

### Schema Initialization
```
mongo issuetracker scripts/init.mongo.js
```

## Chapter 7: Architecture and ESLint

### UI Server
```
mv server api
mv scripts api
mkdir ui
mv public ui
mv src ui
cd api
npm install
cd ..
cd ui
npm install
cd ..
rm -rf node_modules
```

### Mulitple Environments
```
cd api
npm install dotenv@6
cd ..
cd ui
npm install dotenv@6
```

### Proxy Based Architecture
```
cd ui
npm install http-proxy-middleware@0
```

### ESLint
```
cd api
npm install --save-dev eslint@5 eslint-plugin-import@2
npm install --save-dev eslint-config-airbnb-base@13
npx eslint .
```

### ESLint for Front-end
```
cd ui
npm install --save-dev eslint@5 eslint-plugin-import@2
npm install --save-dev eslint-plugin-jsx-a11y@6 eslint-plugin-react@7
npm install --save-dev eslint-config-airbnb@17
npx eslint . --ignore-pattern public
npx eslint . --ext js,jsx --ignore-pattern public
```

## Chapter 8: Modularization and Webpack

### Front-end Modules and Webpack
```
cd ui
npm install --save-dev webpack@4 webpack-cli@3
npx webpack --version
npx webpack public/App.js --output public/app.bundle.js
npx webpack public/App.js --output public/app.bundle.js --mode development
```

### Transform and Bundle
```
cd ui
npm install --save-dev babel-loader@8
npx webpack
npx webpack --watch
```

### Libraries Bundle
```
cd ui
npm install react@16 react-dom@16
npm install prop-types@15
npm install whatwg-fetch@3
npm install babel-polyfill@6
```

### Hot Module Replacement
```
cd ui
npm install --save-dev webpack-dev-middleware@3
npm install --save-dev webpack-hot-middleware@2
```

## Chapter 9: React Router

### Simple Routing
```
cd ui
npm install react-router-dom@4
```

### Query Strings
```
cd ui
npm install url-search-params@1
```

## Chapter 11: React-Bootstrap

### Installation
```
cd ui
npm install react-bootstrap@0
npm install bootstrap@3
ln -s ../node_modules/bootstrap/dist public/bootstrap
```

### Navigation Bar
```
cd ui
npm install react-router-bootstrap@0
```

## Chapter 12: Server Rendering

### Directory Structure
```
cd ui
mkdir browser
mkdir server
mv src/App.jsx browser
mv uiserver.js server
cp src/.babelrc browser
```

### Basic Server Rendering
```
cd ui
npx babel src/About.jsx --out-dir server
```

### Webpack for UI Server
```
cd ui
rm src/.babelrc browser/.babelrc
npm install --save-dev webpack-node-externals@1
mkdir dist
rm server/About.js
mv server/render.js server/render.jsx
npm install source-map-support@0
```

### HMR for UI Server
```
cd ui
npm install --save-dev webpack-merge@4
npx webpack -w --config webpack.serverHMR.js
```

### Data from APIs
```
cd ui
npm uninstall whatwg-fetch
npm install isomorphic-fetch@2
```

### Routing
```
cd ui
rm public/index.html
```

### Data Fetcher Parameters
```
cd ui
npm install serialize-javascript@1
```


## Chapter 13: Advanced Features

### MongoDB Aggregate
```
cd api
mongo issuetracker scripts/generate_data.mongo.js
```

### Search Bar
```
cd ui
npm install react-select@2
````

## Chapter 14: Authentication

### Verify Google Token
```
cd api
npm install body-parser@1
npm install google-auth-library@2
```

### JSON Web Token
```
cd api
npm install jsonwebtoken@8
npm install cookie-parser@1
```

### CORS
```
cd api
npm install cors@2
```

## Chapter 15: Deployment

### Git Repositories

```
cd api
git init
git add .
git commit -m "First commit"
git remote add origin git@github.com:$GITHUB_USER/tracker-api.git
git push -u origin master

cd ui
git init
git add .
git commit -m "First commit"
git remote add origin git@github.com:$GITHUB_USER/tracker-ui.git
git push -u origin master
```

### MongoDB
```
cd api
mongo $DB_URL scripts/init.mongo.js
mongo $DB_URL scripts/generate_data.mongo.js
```

### Heroku
```
heroku login
```

### API application
```
cd api
git commit -am "Changes for Heroku"
git push origin master
heroku create tracker-api-$GITHUB_USER
heroku config:set \
  DB_URL=$DB_URL \
  JWT_SECRET=yourspecialsecret \
  COOKIE_DOMAIN=herokuapp.com
git push heroku master
heroku logs
```

### UI Application
```
cd ui
git commit -am "Changes for Heroku"
git push origin master
heroku create tracker-ui-$GITHUB_USER
heroku config:set \
  UI_API_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/graphql \
  UI_AUTH_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/auth \
  GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
git push heroku master
cd api
heroku config:set \
  UI_SERVER_ORIGIN=https://tracker-ui-$GITHUB_USER.herokuapp.com
```

### Proxy Mode
```
cd ui
heroku config:set \
  UI_API_ENDPOINT=https://tracker-ui-$GITHUB_USER.herokuapp.com/graphql \
  UI_AUTH_ENDPOINT=https://tracker-ui-$GITHUB_USER.herokuapp.com/auth \
  UI_SERVER_API_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/graphql \
  API_PROXY_TARGET=https://tracker-api-$GITHUB_USER.herokuapp.com
```

### Non-Proxy Mode
```
cd ui
heroku domains:add ui.$CUSTOM_DOMAIN
cd api
heroku domains:add api.$CUSTOM_DOMAIN
cd ui
heroku config:set \
  UI_API_ENDPOINT=http://api.$CUSTOM_DOMAIN/graphql \
  UI_SERVER_API_ENDPOINT=http://api.$CUSTOM_DOMAIN/graphql \
  UI_AUTH_ENDPOINT=http://api.$CUSTOM_DOMAIN/auth
heroku config:unset \
  API_PROXY_TARGET
cd api
heroku config:set \
  UI_SERVER_ORIGIN=http://ui.$CUSTOM_DOMAIN \
  COOKIE_DOMAIN=$CUSTOM_DOMAIN
```
