const Discord = require('discord.js');
const client = new Discord.Client();
var settings = {
  muted: false
};
var assets = {
  recentmessage: "",
  processed: "",
};
var banks = {
  startconvomode: 0,
  start: ["~ Yeah, I'm here.","~ Hallo.","~ Hello.","~ What? Oh sorry 'bout that.","~ Was programming.","~ Are you there?"],
  yespositive: ["~ Whew.", "~ That's nice to know.", "~ Good.", "~ Welp.", "~ Well."]
};
var $i = {
	getbank: function (ide) {
	  var localrandom = Math.floor(Math.random() * id.length)
	  if (id === start && localrandom === 6) {
	    banks.startconvomode = 6;
	  }
	  return banks.ide[localrandom];
	}
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //Process assets
  assets.recentmessage = msg.content;
  assets.processed = assets.recentmessage.toLowerCase();

  if (assets.processed.indexOf("~") === -1) {
  if (assets.processed.indexOf("ping") != -1) {
    if (assets.processed.indexOf("ping pong") != -1) {
      msg.reply("~ I can't play that game.");
    } else {
      msg.reply("~ Pong Check!");
    }
  }
  //Stop
	  if (assets.processed.indexOf("stop") != -1) {
	    if (assets.processed.indexOf("stop now") != -1) {
	      msg.reply("~ Alright, stopping now.");
            } else {
	      msg.reply("~ Are you adressing me?");
	    }
	  }
  //Start
  	  if (assets.processed.indexOf("you") != -1 && assets.processed.indexOf("there") != -1) {
  	    msg.reply($i.getbank(start));
  	  }
  //Yes requests
  	  if (assets.processed.indexOf("sure") != -1 || assets.processed.indexOf("yes") != -1 || assets.processed.indexOf("ye") != -1 || assets.processed.indexOf("ja") != -1) { 
  	    if (banks.startconvomode === 6) {
  	      msg.reply("~ Ah, good.");
  	      banks.startconvomode = 0;
  	    }
  	  }
	  
  }
});

client.login(process.env.BOT_TOKEN);
