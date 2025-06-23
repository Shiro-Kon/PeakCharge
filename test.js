const { Telegraf } = require('telegraf');

const bot = new Telegraf('7895017538:AAH_2Hpva00xFtfEwTMwY0QkYUqGaGA4sT8');
const CHAT_ID = '346038888';

bot.telegram.sendMessage(CHAT_ID, 'Тестове повідомлення від сервера!')
  .then(() => console.log('Повідомлення відправлено'))
  .catch((err) => console.error('Помилка відправки:', err));
