const Discord = require('discord.js');
const client = new Discord.Client();
var settings = {
  muted: false
};
var assets = {
  recentmessage: "",
  processed: "",
  args: "",
  prefix: "`"
};

var helpEmbed = new Discord.RichEmbed(data);
helpEmbed.author = "Help";
helpEmbed.description = "This is a test.";
helpEmbed.color = 15744060;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //Process assets
  assets.recentmessage = msg.content;
  assets.processed = assets.recentmessage.toLowerCase();
  assets.args = assets.processed.split(" ");
  if (assets.args.length == 1) {
	messageEmbed.channel.send(``, helpEmbed);
  }
});

client.login(process.env.BOT_TOKEN);
