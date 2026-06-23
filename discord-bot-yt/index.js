require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("")[1];
    message.reply({ content: "Generating Short ID for" + url });
  }
  message.reply({ content: "Hi From Bot" });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const token = process.env.TOKEN;

client.login(token);
