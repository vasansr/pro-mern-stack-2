# MongoDB shell commands

This is a list of all the mongo shell commands used in the book. It includes
commands used to try out things or change things manually.

## Chapter 6: MongoDB

### MongoDB Basics

```
show databases
db
show collections
use issuetracker
show collections

db.employees.insertOne({ name: { first: 'John', last: 'Doe' }, age: 44 })
db.employees.find()
db.employees.find().pretty()

db.employees.insertOne({ name: { first: 'Jane', last: 'Doe' }, age: 54 })

let result = db.employees.find().toArray()
result.forEach((e) => print('First Name:', e.name.first))
result.forEach((e) => printjson(e.name))
```
