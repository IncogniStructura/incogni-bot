const Discord = require('discord.js');
const client = new Discord.Client();
var settings = {
  muted: false
};
var assets = {
  recentmessage: "",
  processed: "",
  wordbankstop: []
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //Process assets
  assets.recentmessage = msg.content;
  assets.processed = assets.recentmessage.toLowerCase();

  if (assets.processed.indexOf("$") === -1) {
  if (assets.processed.indexOf("ping") != -1) {
    if (assets.processed.indexOf("ping pong") != -1) {
      msg.reply("$ I can't play that game.");
    } else {
      msg.reply("$ Pong Check!");
    }
  }
  //Stop
	  if (assets.processed.indexOf("stop") != -1) {
	    if (assets.processed.indexOf("stop now") != -1) {
	      msg.reply("$ Alright, stopping now.");
            } else {
	      msg.reply("$ Are you adressing me?");
	    }
	  }
  //Start
  	  if (assets.processed.indexOf("you") != -1 && assets.processed.indexOf("there") != -1) {
  	    msg.reply("$ Yeah, I'm here.");
  	  }
	  
  }
});

client.login(process.env.BOT_TOKEN);
