const { MongoClient } = require('mongodb');

// Replace the URL with your own MongoDB database URL
const url = 'mongodb+srv://ayazsheikhdev:ayazsheikhdev@teamxstoremain.19rqiur.mongodb.net/';

// Function to connect to the database
async function connectToDatabase() {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    return client.db();
}

module.exports = connectToDatabase;
