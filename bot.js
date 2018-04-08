const Discord = require('discord.js');
const client = new Discord.Client();
var settings = {
  muted: false
};
var assets = {
  recentmessage: "",
  processed: "",
  count: {
    words: ""
  }
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //Process assets
  assets.recentmessage = msg.content;
  assets.processed = assets.recentmessage.toLowerCase();
  assets.count.words = assets.split(" ");


  if (assets.processed.indexOf("ping") != -1 && assets.processed.indexOf("ping pong") === -1) {
    msg.reply("Pong!");
  }
});

client.login(process.env.BOT_TOKEN);
