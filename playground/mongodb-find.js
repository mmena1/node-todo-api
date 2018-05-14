//var user = {name: 'Martin', age: 32};
// ES6 - Object destructuring: pulling off properties from objects into variables
//var {name} = user;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // find all

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('all Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // find by field

    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('Todos completed');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // find by id

    db.collection('Todos').find({
        _id: new ObjectID('5af9af613b7033286a48e75f')
    }).toArray().then((docs) => {
        console.log('Todos by id = 5af9af613b7033286a48e75f');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Martin Mena'}).toArray().then((docs) => {
        console.log('Users by name: Martin Mena');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    // client.close();
});