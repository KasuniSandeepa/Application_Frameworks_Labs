/*
const {MongoClient} = require('mongodb'); //importing the mongodb driver

//Mongodb client has created
const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Following codes are to cnnected tho the server
client.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log('Successfully connected to Mongo DB');
});
module.exports = client;*/
