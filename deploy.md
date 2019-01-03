# Git Repositories

## API Repository

```
cd api
git init
git add .
git commit -m "First commit"
git remote add origin git@github.com:$GITHUB_USER/tracker-api.git
git push -u origin master
```

## UI Repository
```
cd ui
git init
git add .
git commit -m "First commit"
git remote add origin git@github.com:$GITHUB_USER/tracker-ui.git
git push -u origin master
```

## MongoDB
```
cd api
mongo $DB_URL scripts/init.mongo.js
mongo $DB_URL scripts/generate_data.mongo.js
```

## Heroku
```
heroku login
```

## API application
```
cd api
heroku create tracker-api-$GITHUB_USER
heroku config:set DB_URL=$DB_URL JWT_SECRET=yourspecialsecret
git push heroku master
```

## UI Application
```
cd ui
heroku create tracker-ui-$GITHUB_USER
heroku config:set \
  UI_API_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/graphql \
  UI_AUTH_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/auth \
  GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
git push heroku master
```
