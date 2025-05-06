const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { Telegraf } = require('telegraf');

const bot = new Telegraf('токен для доступу до HTTP API');
const CHAT_ID = '';

const app = express();
const PORT = 4000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// обработка запроса из формы подписки
app.post('/subscribe', async (req, res) => {
  try {
    const { name, phone, email, comment } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).send({ success: false, message: 'Всі обовʼязкові поля мають бути заповнені' });
    }

    const message = `
📝 Нова заявка на підписку:
👤 Ім'я: ${name}
📱 Телефон: ${phone}
📧 Email: ${email}
💬 Коментар: ${comment || 'немає'}
`;

    await bot.telegram.sendMessage(CHAT_ID, message);

    res.status(200).send({ success: true, message: 'Заявку отримано!' });
  } catch (error) {
    console.error('Помилка обробки замовлення:', error);
    res.status(500).send({ success: false, message: 'Внутрішня помилка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
