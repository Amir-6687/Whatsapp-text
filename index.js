const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true }); // اصلاح اشتباه تایپی
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  if (message.body === "Hi") {
    message.reply("Hallo");
  }
  if (message.body === "wie gehts ?") {
    message.reply("gut! und dir?");
  }

  if (message.body === "was machst du ?") {
    message.reply("ich lerne gerade JavaScript");
  }

  if (message.body === "wo bist du ?") {
    message.reply("ich bin zuhause");
  }

  if (message.body === "ok, viel Erfolg") {
    message.reply("vielen Dank");
  }

  if (message.body === "Chao") {
    message.reply("Chao Chao");
  }
});

client.initialize();
