const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '843900086:AAHXB7we1Kqh32iMjkYQXuEk_DCEXKb711M';

// Create a bot that uses 'polling' to fetch new updates
let bot = new TelegramBot(token, { webHook: { port: process.env.PORT || 443  }});
const url = process.env.APP_URL || 'https://telegrambot77.herokuapp.com:443';
const externalUrl = process.env.CUSTOM_ENV_VARIABLE || 'https://telegrambot77.herokuapp.com',
// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
// bot.setWebHook(`${externalUrl}:443/bot${token}`);
bot.setWebHook(`https://telegrambot77.herokuapp.com:443/bot${token}`);

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
