const express = require('express');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3003;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'mediaUsersDB';

client
    .connect()
    .then(() => {
        console.log('Connected to MongoDB!')
        db = client.db(dbName)

        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Mongo connection error: ', err.message);
    });

app.use(express.json());

// app.post('/create', (req, res) => {
//     db.collection('userCollection')
//         .insertOne({ username: req.body.username, email: req.body.email })
//         .then((results) => res.json(results))
//         .catch((err) => {
//             if (err) throw err;
//         });
// });