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

### MongoDB CRUD Operations
```
db.employees.insertOne({
  _id: 1,
  name: { first: 'John', last: 'Doe' },
  age: 44
})

db.employees.insertOne({
  name: {first: 'John', middle: 'H', last: 'Doe'},
  age: 22
})

db.employees.drop()

db.employees.insertOne({
  id: 1,
  name: { first: 'John', last: 'Doe' },
  age: 48
})

db.employees.insertOne({
  id: 2,
  name: { first: 'Jane', last: 'Doe'} ,
  age: 16
})

db.employees.insertMany([
  { id: 3, name: { first: 'Alice', last: 'A' }, age: 32 },
  { id: 4, name: { first: 'Bob', last: 'B' }, age: 64 },
])

db.employees.findOne({ id: 1 })
db.employees.find({ age: { $gte: 30 } })
db.employees.find({ age: { $gte: 30 }, 'name.last': 'Doe'  })

db.employees.createIndex({ age: 1 })
db.employees.createIndex({ id: 1 }, { unique: true })

db.employees.find({}, { 'name.first': 1, age: 1 })
db.employees.find({}, { _id: 0, 'name.first': 1, age: 1 })

db.employees.updateOne({ id: 2 }, { $set: {age: 23 } })

db.employees.updateMany({}, { $set: { organization: 'MyCompany' } })

db.employees.replaceOne({ id: 4 }, {
  id: 4,
  name : { first : "Bobby" },
  age : 66
});

db.employees.find({ id: 4 })

db.employees.deleteOne({ id: 4 })
db.employees.count()

db.employees.aggregate([
  { $group: { _id: null, total_age: { $sum: '$age' } } }
])
db.employees.aggregate([
  { $group: { _id: null, count: { $sum: 1 } } }
])

db.employees.insertOne({
  id: 4,
  name: { first: 'Bob', last: 'B' },
  age: 64,
  organization: 'OtherCompany'
})

db.employees.aggregate([
  { $group: { _id: '$organization', total_age: { $sum: '$age' } } }
])

db.employees.aggregate([
  { $group: { _id: '$organization', average_age: { $avg: '$age' } } }
])
```
