async function generateRedeemCode(coins) {
    // Import the connectToDatabase function from the database.js file
    const connectToDatabase = require('./database');

    // Connect to the database and get the redeem_code collection
    const db = (await connectToDatabase()).collection('redeem_code');

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 20;
    let redeemCode = '';

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        redeemCode += characters[randomIndex];
    }

    // Create a new redeem code document
    const redeemCodeDoc = {
        code: redeemCode,
        coins: parseFloat(coins) || 0,
        status: 'active'
    };

    // Insert the redeem code document into the database
    await db.insertOne(redeemCodeDoc);

    return redeemCode;
}

module.exports = generateRedeemCode;
