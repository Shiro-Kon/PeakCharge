const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("7895017538:AAH_2Hpva00xFtfEwTMwY0QkYUqGaGA4sT8");
const CHAT_ID = "346038888";

const app = express();
const PORT = 3000; // сервер подписок слушает порт 3000

app.use(cors());
app.use(bodyParser.json());

app.post("/subscribe", async (req, res) => {
  try {
    const { fullName, phoneNumber, email, comment } = req.body;
    console.log("🔔 /subscribe body:", req.body);

    if (!fullName || !phoneNumber || !email) {
      return res
        .status(400)
        .send({ success: false, message: "Ім'я, телефон та email — обов'язкові" });
    }

    const message = `
📝 Нова заявка на підписку:
👤 Ім’я: ${fullName}
📱 Телефон: ${phoneNumber}
📧 Email: ${email}
💬 Коментар: ${comment?.trim() || "(немає)"}
`;
    await bot.telegram.sendMessage(CHAT_ID, message);

    res.status(200).send({ success: true, message: "Заявку отримано!" });
  } catch (err) {
    console.error("❌ subscribe error:", err);
    res
      .status(500)
      .send({ success: false, message: "Сервіс тимчасово недоступний" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ tg-subscribe-server запущено на http://localhost:${PORT}`);
});
