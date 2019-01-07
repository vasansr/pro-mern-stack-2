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
