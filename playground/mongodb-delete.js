//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // delete many
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').delete({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // find and delete one
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: "Bob"}).then((result) => {
    console.log(result);
  });

  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5c357edb6ebba51bdd25e6a1")}).then((result) => {
  //   console.log(result);
  // });

  //db.close();
});
