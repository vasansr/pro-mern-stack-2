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
