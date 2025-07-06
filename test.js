const { Telegraf } = require('telegraf');

const bot = new Telegraf('Here is the token for bot');
const CHAT_ID = "@userinfobot - here's the chat ID";

bot.telegram.sendMessage(CHAT_ID, 'Тестове повідомлення від сервера!')
  .then(() => console.log('Повідомлення відправлено'))
  .catch((err) => console.error('Помилка відправки:', err));
