const Discord = require('discord.js');
const client = new Discord.Client();
var settings = {
  muted: false
};
var assets = {
  recentmessage: "",
  processed: ""
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  assets.recentmessage = msg.content;
  assets.processed = assets.recentmessage.toLowerCase();
  if (assets.processed.indexOf("ping") != -1) {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
