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

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        // console.log(result);
    // });
    // delete one

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOne and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Martin Mena'}).then((result) => {
        console.log(result.result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5af9b4873b7033286a48e8d3')}).then((result) => {
        console.log(result);
    });

    // client.close();
});