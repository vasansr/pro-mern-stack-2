const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost';
const dbName = 'playground';

function testWithCallbacks(callback) {
  console.log('\n--- testWithCallbacks ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  client.connect(function(err, client) {
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    collection = db.collection('employees');

    const employee = { id: 1, name: 'A. Callback', age: 23 };
    collection.insertOne(employee, function(err, result) {
      if (err) {
        console.log(err);
        client.close();
        callback();
      } else {
        console.log('Result of insert:\n', result.insertedId);
        collection.find({id: 1}).toArray(function(err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log('Result of find:\n', docs);
          }
          client.close();
          callback();
        });
      }
    });
  });
}

async function testWithAsync() {
  console.log('\n--- testWithAsync ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    collection = db.collection('employees');

    const employee = { id: 2, name: 'B. Async', age: 16 };
    const result = await collection.insertOne(employee);
    console.log('Result of insert:\n', result.insertedId);

    const docs = await collection.find({ id: 2 }).toArray();
    console.log('Result of find:\n', docs);
  } catch(err) {
    console.log(err);
  } finally {
    client.close();
  }
}

testWithCallbacks(testWithAsync);
