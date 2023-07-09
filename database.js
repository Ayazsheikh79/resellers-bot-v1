const { MongoClient } = require('mongodb');
require('dotenv').config();

// Replace the URL with your own MongoDB database URL
const url = process.env.dbUrl;

// Function to connect to the database
async function connectToDatabase() {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    return client.db();
}

module.exports = connectToDatabase;
