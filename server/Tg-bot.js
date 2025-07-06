const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { Telegraf } = require("telegraf");

const bot = new Telegraf('Here is the token for bot');
const CHAT_ID = "@userinfobot - here's the chat ID";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/order", async (req, res) => {
  try {
    const {
      products,
      totalPrice,
      fullName,
      phoneNumber,
      email,
      postOffice,
      paymentMethod,
      city,
      deliveryMethod,
    } = req.body;

    if (!fullName || !phoneNumber || !email || !products) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are required" });
    }

    const message = `
 📦 Нове замовлення:
 👤 ПІБ: ${fullName}
 📱 Телефон: ${phoneNumber}
 📧 Email: ${email}
 🛒 Продукти: ${products.map((product) => `${product.name} ${product.subname} (${product.quantity} шт.)`).join(", ")}
 💳 Спосіб оплати: ${paymentMethod === "card" ? "Картка" : "Готівка"}
 🚚 Спосіб доставки: ${deliveryMethod === "pickup" ? "Забрати з магазину" : "Доставка на Нову Пошту"}
 🏙️ Місто: ${city}
 🏠 НП: ${postOffice}
 🏷️ Загальна вартість: ${totalPrice}₴
`;

    await bot.telegram.sendMessage(CHAT_ID, message);
    res.status(200).send({ success: true, message: "Order received!" });
  } catch (error) {
    console.error("Error handling order:", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
