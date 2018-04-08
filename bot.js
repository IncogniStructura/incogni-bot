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
  //Process assets
  assets.recentmessage = msg.content;
  assets.processed = assets.recentmessage.toLowerCase();

  if (message.author != "IncogniBot") {
  if (assets.processed.indexOf("ping") != -1) {
    if (assets.processed.indexOf("ping pong") != -1) {
      msg.reply("I can't play Ping Pong!");
    } else {
      msg.reply("Pong Check!");
    }
  }
  if (assets.processed.indexOf("stop") != -1) {
    msg.reply("Are you adressing me?");
  }
  }
});

client.login(process.env.BOT_TOKEN);
