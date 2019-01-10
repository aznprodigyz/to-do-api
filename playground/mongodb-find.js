//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection("Todos").find({
  //   _id: new ObjectID("5c342bf0e244e516ab936277")
  // }).toArray().then( (docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined , 2));
  // }, (err) => {
  //   console.log("unable to fetch todos", err);
  // })

  // db.collection("Todos").find().count().then( (count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log("unable to fetch todos", err);
  // });

  db.collection("Users").find({name: 'Bob'}).toArray().then( (docs) => {
    console.log(JSON.stringify(docs, undefined , 2));
  }, (err) => {
    console.log("unable to fetch todos", err);
  });
  //db.close();
});
