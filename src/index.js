const TOKEN = '5034909202:AAGP8L_cIeBAice17_q-JkOiFiYpaUQcQGA';

const TelegramBotAPI = require('node-telegram-bot-api');

const bot = new TelegramBotAPI(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет, Друг!');
});
