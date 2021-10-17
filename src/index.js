require('dotenv').config();

const TOKEN = process.env.TELEGRAM_TOKEN || 'TELEGRAM_BOT_TOKEN';

const TelegramBotAPI = require('node-telegram-bot-api');

const bot = new TelegramBotAPI(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет, Друг!');
});
