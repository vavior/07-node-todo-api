const { MongoClient, ObjectID } = require('mongodb');
const objId = new ObjectID();
console.log('objectId', objId);

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('Unable to connect to mongoDB server.');

    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp'); // reference the database used

    db.collection('Todos')
        .insertOne({
            text: 'Something to do',
            completed: false
        }, (err, result) => { // callback called after insertion's success or failure
            if (err) return console.log('Unable to insert todo: ', todo);
            console.log(JSON.stringify(result.ops, undefined, 2)); // 'ops' attribute stores all of the documents that were inserted
            console.log(result.ops[0]._id.getTimestamp());
        }); // takes the name of the collection in which you want to alter data.

    db.collection('Users').insertOne({
        name: 'Stef',
        // _id: 'top_top',
        age: 30,
        location: 'Bxl'
    }, (err, result) => {
        if(err) return console.log('Insertion failed');
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close(); // closes the connection with the db server
});
// 2 args: 
// 1st: url where database exists => we use the mongodb protocol (mongodb://). After the port, we have to specify to which db we want to connect to.
// 2nd: callback fct that will fire after the connection succeeded or failed