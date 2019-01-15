const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('Unable to connect to Mongo server.');

    const db = client.db('TodoApp');

    db.collection('Todos').find({ _id: new ObjectID('5c3e2e18de89a5f09bfb65f6') }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => console.log('Unable to find todos', err));

    db.collection('Todos').find().count().then((count) => {
        console.log(count);
    }, (err) => console.log('Unable to count todos', err));

    // console.log(db.collection('Todos').find());

    // db.close();
});
