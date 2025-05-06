const { Telegraf } = require('telegraf');

const bot = new Telegraf('токен для доступу до HTTP API');
const CHAT_ID = '';

bot.telegram.sendMessage(CHAT_ID, 'Тестове повідомлення від сервера!')
  .then(() => console.log('Повідомлення відправлено'))
  .catch((err) => console.error('Помилка відправки:', err));
