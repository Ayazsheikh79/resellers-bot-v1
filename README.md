# Resellers-bot-v1 TEAM X
Open-source Telegram marketplace bot developed by TEAM X.

Developer: Ayaz Sheikh

Telegram Username: @Ayazsheikh079

The bot is ready to deploy on DigitalOcean.

# ❗ Important ❗

- Replace the MongoDB database URL in the `.env` file with your own.
- Replace `contactDetails` in the `.env` file with your actual contact details.
- Replace `botToken` with your actual Telegram bot token.
- Replace `contactLink` with your actual Telegram chat link.
- Replace `apiKey` with your actual API key provided by @teamxStockBOT.
- Replace `admin` with the admin's user ID.

Make these edits in the `.env` file.

# File Price Setup
Open the `files.json` file and update the prices according to your desired values.

Note: Prices must be in bot coins.

# Bot Commands

- `/gen`: Use this command to generate a redeem code for customers. (Only the admin whose user ID was added in the `.env` file can use this command.) Example: `/gen 20` (to generate a redeem code worth 20 coins).
- `/broadcast`: This command is for broadcasting messages to your customers or bot users. Example: `/broadcast Hi everyone, this is a broadcast message.` After broadcasting, the message will be forwarded to all users.
- `/redeem`: This command is for redeeming a code. Example: `/redeem myRedeemCode` (replace `myRedeemCode` with the actual redeem code value).
- `/start`: This command starts the bot.

# For any additional information or help, you can contact me directly on Telegram.
Telegram Username: @Ayazsheikh079
