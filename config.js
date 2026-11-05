const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/madusha229/SLRASH-bot/blob/main/images/images.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 SLRASH Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
